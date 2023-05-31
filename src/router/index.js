// 이 파일은 라우터 설정 파일이다

import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding.vue";
import DataBindingHtml from "@/views/DataBindingHtml.vue"; // @/로 시작하면 루트 디렉토리부터 찾는다는 뜻의 Alias이다.

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
        // 사용자가 어떤 페이지에 접근하더라도 HomeView 컴포넌트를 import한다 (즉시로딩)
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
            // about에 접근하면 AboutView 컴포넌트를 import 한다 (지연로딩)
        }
    },
    {
        path: "/databinding",
        name: "DataBinding",
        component: DataBinding
    },
    {
        path: "/databindinghtml",
        name: "DataBindingHtml",
        component: DataBindingHtml
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
