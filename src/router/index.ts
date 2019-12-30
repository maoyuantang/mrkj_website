/*
 * @Author: tmy
 * @Date: 2019-12-26 11:16:17
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-30 14:18:55
 * @Description: Do not edit
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import(/* webpackChunkName: "about" */ '@/components/home/home.vue'),
            },
            {
                path: '/solution',
                name: 'solution',
                component: () => import(/* webpackChunkName: "about" */ '@/components/solution/Solution.vue'),
            },
            {
                path: '/aboutUs',
                name: 'aboutUs',
                component: () => import(/* webpackChunkName: "about" */ '@/components/aboutUs/AboutUs.vue'),
            },
            {
                path: '/cooperationCase',
                name: 'cooperationCase',
                component: () => import(/* webpackChunkName: "about" */ '@/components/cooperationCase/CooperationCase.vue'),
            },
            {
                path: '/channelCooperation',
                name: 'channelCooperation',
                component: () => import(/* webpackChunkName: "about" */ '@/components/channelCooperation/ChannelCooperation.vue'),
            },
            {
                path: '/demo',
                name: 'demo',
                component: () => import(/* webpackChunkName: "about" */ '@/components/demo.vue'),
            },
            {
                path: '/demo2',
                name: 'demo2',
                component: () => import(/* webpackChunkName: "about" */ '@/components/demo2.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
