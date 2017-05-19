//vuex状态获取
export default {
    getState(state, getters) {
        return state.login
    },
    getToken(state, getters) {
        return state.access_token
    }
}