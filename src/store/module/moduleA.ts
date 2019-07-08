import {Module} from 'vuex';
import {RootState} from '@/store/store';


interface ModuleA {
    data: string;
}

const module: Module<ModuleA, RootState> = {

    namespaced : true,

    state: {
        data: 'moduleA',
    },

    mutations: {
        setData(state, data: string) {
            state.data = data;
        },
    },

    actions: {
        setData(context, data: string) {
            context.commit('setData', data);
        },
    },

    getters: {
        data: (state, getters) => {
            return state.data;
        },
    },

};

export default module;
