import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/todo',
            name: 'todo',
            component: () => import('./views/TodoList.vue'),
        },
        {
            path: '/todo/:path',
            name: 'todo-path',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/TodoList.vue'),
            // children: [
            //     {
            //         path: 'list-all',
            //         component: () => import('./components/todo/Item.vue'),
            //     },
            //     {
            //         path: 'list-active',
            //         component: () => import('./components/todo/Item.vue'),
            //     },
            // ],
        },
    ],
});
