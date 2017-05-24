import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { getPermission } from '../util/permit'

Vue.use(Vuex)
export function createStore() {
    return new Vuex.Store({
        state: {
            login: false,
            admin: false,
            items: {},
            user: '',
            showDrMenu: true,
            access_token: 'aa',
            permission: [],
            lists: {
                top: [],
                new: [],
                show: [],
                ask: [],
                job: []
            }
        },
        actions,
        mutations,
        getters
    })
}