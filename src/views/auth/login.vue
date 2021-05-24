<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="authLoginForm"
      :rules="authLoginRules"
      label-width="0px"
      status-icon
      class="hoverable"
    >
      <div>
        <div style="text-align:center; width: 100%;">
          <img
            :src="configData.index_logo || '@/assets/logo.png'"
            style="text-align:center; height: 50px; margin-top: 20px;margin-bottom: -20px;"
          >
        </div>
        <h1 class="login-title">{{ configData.index_title ? configData.index_title : '全生命周期智慧电梯云平台' }}</h1>
      </div>
      <el-form-item
        label
        prop="username"
      >
        <el-input
          v-model.trim="authLoginForm.username"
          type="text"
          placeholder="请输入用户名"
          clearable
          required
          size="medium"
        />
      </el-form-item>
      <el-form-item
        label
        prop="password"
      >
        <el-input
          v-model.trim="authLoginForm.password"
          type="password"
          placeholder="请输入密码"
          clearable
          required
          size="medium"
        />
      </el-form-item>
      <div class="submit-wrapper">
        <button
          class="btn-fw btn-login"
          @click.prevent="authLoginSubmit"
          v-text="'登 录'"
        />
      </div>
      <div>
        <div style="color: #606266;font-size: 12px;text-align: center;margin-bottom: 20px;">{{ configData.index_button ? configData.index_button : 'Copyright © 2020 福建省德尔智创集团有限公司' }}</div>
      </div>
    </el-form>
  </div>
</template>

<script>
// 接口
import { getConfig } from '@/api/login'
import { reactive, ref, toRefs, onMounted, computed } from 'vue'
import { useStore } from 'vuex' // 仓库
import { guid } from '@/utils'
import SHARETED_COMMON_MD5 from '@/common/js/shareted/common/md5'
import PROJECT_COMMON from '@/common/js/project/common'

export default {
  name: 'loginPage',
  setup() {
    // 仓库
    const store = useStore()
    // ref指向
    const loginForm = ref(null)
    // 原始状态
    const state = reactive({
      configData: {
        index_logo: '', // 登录框图标
        index_title: '', // 登录框标题
        index_button: '' // 登录框标识
      },
      authLoginForm: {
        username: '', // 用户名
        password: '', // 密码
      },
      authLoginRules: {
        username: [
          { required: true, message: '账户不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
      }
    })
    // dom挂载
    onMounted(() => {
      getConfigData()
    })
    // 获取配置
    const getConfigData = async() => {
      const res = await getConfig()
      if (res.code === 0) {
        // logo配置
        state.configData = res.data
      }
    }
    // 登录
    const authLoginSubmit = () => {
      loginForm.value.validate(async(valid) => {
        if (valid) {
          const data = {
            act: 'ma_login',
            user_name: state.authLoginForm.username,
            pws: SHARETED_COMMON_MD5.hex_md5(
              PROJECT_COMMON.project_password_front_code +
                state.authLoginForm.password.trim()
            ),
            udid: guid(),
            type: 1 // 登录页登录标识
          }
          // 调用登录方法
          const res = await store.dispatch('user/loginCaps', data)
          if (res.code === 0) {
            
          }
        }
      })
    }
    return {
      ...toRefs(state),
      loginForm,
      authLoginSubmit,
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/common/scss/admin/auth.scss';
</style>
