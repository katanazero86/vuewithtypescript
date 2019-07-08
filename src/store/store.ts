import Vue from 'vue';
import Vuex, {ActionContext, Getter, GetterTree, StoreOptions} from 'vuex';


Vue.use(Vuex);

// export default new Vuex.Store({
//
//     strict : true,
//
//     state: {},
//
//     mutations: {},
//
//     actions: {},
//
//     getters: {},
// });

// Vuex Module
import ModuleA from './module/moduleA';
import ModuleB from './module/moduleB';

export interface RootState {
    count: number;
    data: string;
}


// interface State {
//     count: number;
// }

const store: StoreOptions<RootState> = {

    // 엄격모드
    strict: true,

    modules: {
        ModuleA, ModuleB,
    },

    state: {
        count: 0,
        data: 'RootData',
    },

    mutations : {
        setCount(state: RootState, payload: any) {
            // console.log(payload);
            state.count = payload.count;
        },
        setData(state, data: string) {
            state.data = data;
        },
    },
    actions : {
        increase({state, getters, dispatch, commit}: ActionContext<RootState, RootState>) {
            commit('setCount', state.count++);
        },
        decrease(context: ActionContext<RootState, RootState>) {
            context.commit('setCount', context.state.count--);
        },
        setData(context, data: string) {
            context.commit('setData', data);
        },
    },

    // mutations : {
    //     setCount(state: State, payload: any) {
    //         // console.log(payload);
    //         state.count = payload.count;
    //     },
    // },

    // actions : {
    //     increase({state, getters, dispatch, commit}: ActionContext<State, State>) {
    //         commit('setCount', state.count++);
    //     },
    //     decrease(context: ActionContext<State, State>) {
    //         context.commit('setCount', context.state.count--);
    //     },
    // },

    // getters : {
    //   count: (state: State) => {
    //       // getter 는 state, getters 2가지 인자값을 가진다.
    //       // mapGetters 를 통해서 computed 속성에 매핑도 가능하다.
    //       return state.count;
    //   },
    // },

    getters : {
        count: (state: RootState) => {
            // getter 는 state, getters 2가지 인자값을 가진다.
            // mapGetters 를 통해서 computed 속성에 매핑도 가능하다.
            return state.count;
        },
    },

};
export default new Vuex.Store(store);
