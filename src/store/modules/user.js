// import store from '@/store'
// import router from '@/router'

const state = {
  token: ''
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true, // 带命名空间的模块,它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
  state,
  mutations,
  actions
}
