import axios from 'axios';

const state = {
    todolist: {},
}

const mutations = {
    setTodolist (state, value) {
        state.todolist = value;
    }
}

const actions = {
    apiGetTodolist ({ commit }) {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('setTodolist', response.data);
            })
    }
}

const getters = {
    getTodolist: state => {
        return state.todolist;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}