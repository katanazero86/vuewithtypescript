import {Module} from 'vuex';
import {RootState} from '@/store/store';


interface ModuleB {
    data: string;
}

const module: Module<ModuleB, RootState> = {

    state: {
        data: 'moduleB',
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
