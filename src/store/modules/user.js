
const state = {
  token: ''
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  loginCaps({ dispatch, commit }, agentData) {
    // 解构赋值
    const { act, user_name, pwd, udid, type } = agentData
    return new Promise(async(resolve, reject) => {
      
    })
  }
}

export default {
  namespaced: true, // 带命名空间的模块,它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
  state,
  mutations,
  actions
}
