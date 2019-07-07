import Vue from 'vue';
import Vuex, {ActionContext, StoreOptions} from 'vuex';


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

interface State {
    count: number;
}

const store: StoreOptions<State> = {

    // 엄격모드
    strict: true,

    state: {
        count: 0,
    },

    mutations : {
        setCount(state: State, payload: any) {
            // console.log(payload);
            state.count = payload.count;
        },
    },

    actions : {
        increase({state, getters, dispatch, commit}: ActionContext<State, State>) {
            commit('setCount', state.count++);
        },
        decrease(context: ActionContext<State, State>) {
            context.commit('setCount', context.state.count--);
        },
    },

    getters : {
      count: (state: State) => {
          return state.count;
      },
    },

};
export default new Vuex.Store(store);
