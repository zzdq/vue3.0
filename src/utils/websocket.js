import WebsocketHeartbeatJs from 'websocket-heartbeat-js'
import { getLocal } from '@/utils/auth' // 获取本地存储的数据
import store from '@/store' // vuex
import { ElMessage } from 'element-plus'
// const wss_url = process.env.VUE_APP_WSS_URL
const wss_url = getWebIP()

let websocketHeartbeatJs = null // 实例
let onlineDevice = [] // 在线设备

// 动态获取地址，根据端口判断
function getWebIP() {
  const curIP = window.location.port.indexOf('300') !== -1 ? 'wss://web.deerttgx.com/wss' : `wss://${window.location.host}/wss`
  return curIP
}
// 初始化websocket
function initWss() {
  websocketHeartbeatJs = new WebsocketHeartbeatJs({
    url: wss_url,
    pingTimeout: 5 * 1000,
    pongTimeout: 10 * 1000,
    reconnectTimeout: 2 * 1000,
    repeatLimit: 5,
    pingMsg: '{"act":"ma_get_active_devices"}'
  })

  websocketHeartbeatJs.onopen = function() {
    console.log('connect success')
    // 长连接登录账号密码
    const loginInfo = JSON.parse(getLocal('loginInfo'))
    sendSock({
      act: 'ma_login',
      user_name: loginInfo.user_name,
      pwd: loginInfo.pwd,
      udid: Math.random()
    })
  }

  websocketHeartbeatJs.onmessage = function(e) {
    const data = JSON.parse(e.data)
    let key = '' // vuex存储的key值
    let value = '' // vuex存储的value
    // 长连接返回数据
    if (data.status && data.cmd === 'ma_login') {
      // 登录，发送心跳设备
      setTimeout(() => {
        sendSock({ act: 'ma_get_active_devices' })
      }, 200)
    } else if (data.status && data.cmd === 'ma_open_rtsp') {
      // 拉流地址获取，设置到vuex
      // store.dispatch('capsSetting/changeSetting', { key: 'rtspUrl', value: data })
      key = 'rtspUrl'
      value = data
    } else if (data.cmd === 'ma_get_active_devices') {
      // 在线设备获取
      /*
        例：
        {
          cmd: "ma_open_rtsp"
          device_id: "865181022192266"
          msg: "请求发送成功"
          play_url: ["rtmp://47.106.99.147:20021/live/865181022192266"，"https://xjcap.runde.pro:20020/live/865181022192266.flv"，"https://xjcap.runde.pro:20020/live/865181022192266.m3u8"]
          status: "true"
        }
      */
      onlineDevice = data.data ? data.data.filter(item => item.hasOwnProperty('user_info')) : []
      // 将在线的安全帽存储到vuex
      key = 'capsOnline'
      value = onlineDevice
    } else if (data.status && data.cmd === 'ma_set_sip_info') {
      // 将在线的安全帽存储到vuex
      key = 'capsOpenVideo'
      value = data
    } else if (data.status && (data.cmd === 'ma_open_group_sip_video_call' || data.cmd === 'ma_open_group_sip_audio_call')) {
      // 将群组通话的roomid存储到vuex
      key = 'groupCall'
      value = data
    } else if (data.cmd === 'server_push_lift_sip_sos_test') {
      // 将群组通话的roomid存储到vuex
      data.deviceType = 'caps'
      key = 'deerCall'
      value = data
    }
    if (key) {
      store.dispatch('capsSetting/changeSetting', { key, value })
    }

    // 长连接登录失败 退回登录页
    if (data.status && data.msg === 'please login in') {
      ElMessage({
        message: '长连接登录失败，请重新登录！',
        type: 'error',
        duration: 1 * 1000
      })
      setTimeout(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }, 1000)
    }
  }

  websocketHeartbeatJs.onreconnect = function() {
    console.log('reconnecting...')
  }
}

// 发送请求
function sendSock(data) {
  websocketHeartbeatJs.send(JSON.stringify(data))
}

// 关闭websocket 不再重连
function closeSock() {
  console.log('caps close')
  websocketHeartbeatJs.close()
}
// 初始化wss、发送请求、关闭长连接
export { initWss, sendSock, closeSock }
