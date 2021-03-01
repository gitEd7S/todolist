import { createStore } from 'vuex';
import { workFixing } from '@/libs/workFixing';

import header from './modules/header/index';

const state = {
    modal: '',
}

const mutations = {
    setModal (state, value) {
        state.modal = value;
    }
}

const actions = {
    actionModal ({ commit }, value) {
        workFixing(!value.length ? 'unfix' : 'fix')
        commit('setModal', value);
    }
}

const modules = {
    header,
}

const getters = {
    getModal (state) {
        return state.modal;
    }
}

export default createStore({
    state,
    mutations,
    actions,
    modules,
    getters,
});