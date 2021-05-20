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
      <el-form-item
        label
        prop="captcha"
      >
        <div class="captcha-form-item-content">
          <el-input
            v-model.trim="authLoginForm.captcha"
            type="text"
            class="captcha-input"
            placeholder="验证码"
            required
            size="medium"
          />
          <div
            id="authLoginDivCaptcha"
            style="height: 36px;"
          />
        </div>
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
import { loginAuto, getConfig } from '@/api/login'
import { reactive, ref, toRefs, onMounted } from 'vue'

export default {
  name: 'loginPage',
  setup() {
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
        captcha: '', // 验证码
      },
      authLoginRules: {
        username: [
          { required: true, message: '账户不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ],
      }
    })
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
          const res = await loginAuto()
          console.log(res)
        }
      })
    }
    return {
      ...toRefs(state),
      loginForm,
      authLoginSubmit
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/common/scss/admin/auth.scss';
</style>
