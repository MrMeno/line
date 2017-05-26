export default {
    SET_ACCESS_TOKEN: (state, token) => {
        state.access_token = token
    },
    SET_Menu: (state, vbool) => {
        state.showDrMenu = vbool
    },
    SET_LOGIN_STATE: (state, vbool) => {
        state.login = vbool
    }
}