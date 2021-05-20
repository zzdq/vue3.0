import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.state.user.token) {
      // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = 'Bearer ' + store.state.user.token
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    let res = response.data
    // 判断返回的字段是都有code字段，有就是固定格式的数据结构
    const state = res.hasOwnProperty('code')
    if (state) {
      // 状态码为0的是请求成功
      if (res.code === 0 || res.status) {
        // 什么也不做直接返回
      } else if (res.code === 1 && (res.msg === '请重新登录！' || res.msg === '')) {
        // 登录失效，重定向到登录页
        Message({
          message: res.msg,
          type: 'error',
          duration: 1 * 1000
        })
        // setTimeout(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload() // 为了重新实例化vue-router对象 避免bug
        //   })
        // }, 1000)
      } else {
        // 返回其他的状态需要提示
        Message({
          message: res.msg || 'warning',
          type: 'warning',
          duration: 5 * 1000
        })
        // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
          Message({
            message: `你已被登出，可以取消继续留在该页面，或者重新登录`,
            type: 'error',
            duration: 1 * 1000
          })
          // setTimeout(() => {
          //   store.dispatch('user/resetToken').then(() => {
          //     location.reload() // 为了重新实例化vue-router对象 避免bug
          //   })
          // }, 1000)
        }
      }
    } else {
      // 直接返回请求体
      res = response
    }
    /* 示例：
      {
        code: 0,
        data: {},
        msg: ''
      }
    */
    return res
  },
  error => {
    console.log('err' + error) // for debug
    let netWork = ''
    if (!navigator.onLine) {
      netWork = '无网络'
    }
    Message({
      message: netWork || error.msg || '接口请求错误！',
      type: 'error',
      duration: 5 * 1000
    })
    // return Promise.reject(error)
    return {
      msg: error.msg || '接口请求错误！',
      data: {},
      code: 1
    }
  }
)

export default service
