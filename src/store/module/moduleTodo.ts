import {Module} from 'vuex';
import {RootState} from '@/store/store';


interface ModuleTodo {
    todoItem: any[];
}

const module: Module<ModuleTodo, RootState> = {

    // namespaced: true,

    state: {
        todoItem: [],
    },

    mutations: {
        setTodo(state, todoData: object) {
            state.todoItem.push(todoData);
        },
        updateTodo(state, todoData: any) {
            const findeIndex = state.todoItem.findIndex((todo) => todo.id === todoData.id);
            state.todoItem[findeIndex] = todoData;
        },
        deleteTodo(state, todoData: any) {
            const findIndex = state.todoItem.findIndex((todo) => todo.id === todoData.id);
            state.todoItem.splice(findIndex, 1);
        },
    },

    actions: {
        setTodo(context, todoData: object) {
            context.commit('setTodo', todoData);
        },
        updateTodo(context, todoData: object) {
            context.commit('updateTodo', todoData);
        },
        deleteTodo(context, todoData: object) {
            context.commit('deleteTodo', todoData);
        },
    },

    getters: {
        todoItem: (state, getters) => {
            return state.todoItem;
        },
        todoActiveItem: (state, getters) => {
            return state.todoItem.filter((todo) => {
                if (todo.status === 'active') {
                    return todo;
                }
            });
        },
        todoClearItem: (state, getters) => {
            return state.todoItem.filter((todo) => {
                if (todo.status === 'clear') {
                    return todo;
                }
            });
        },
    },

};

export default module;
