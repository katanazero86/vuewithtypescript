import {Module} from 'vuex';
import {RootState} from '@/store/store';


interface ModuleTodo {
    todoItem: any[];
}

const module: Module<ModuleTodo, RootState> = {

    namespaced : true,

    state: {
        todoItem: [],
    },

    mutations: {
        setTodo(state, todoData: object) {
            state.todoItem.push(todoData);
        },
        updateTodo(state, todoData: object) {

        },
        deleteTodo(state, todoData: object) {

        },
    },

    actions: {
        setTodo(context, todoData: object) {
            context.commit('setTodo', todoData);
        },
        updateTodo(context, todoData: object) {

        },
        deleteTodo(state, todoData: object) {

        },
    },

    getters: {
        todoItem: (state, getters) => {
            return [...state.todoItem];
        },
    },

};

export default module;
