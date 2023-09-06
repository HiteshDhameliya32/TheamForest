import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/index1'),
    },
    {
        path: '/index-2',
        component: () => import('../views/index2'),
    },
    {
        path: '/index-3',
        component: () => import('../views/index3'),
    },
    {
        path: '/index-4',
        component: () => import('../views/index4'),
    },
    {
        path: '/index-5',
        component: () => import('../views/index5'),
    },
    {
        path: '/index-6',
        component: () => import('../views/index6'),
    },
    {
        path: '/index-7',
        component: () => import('../views/index7'),
    },
    {
        path: '/index-8',
        component: () => import('../views/index8'),
    },
    {
        path: '/index-9',
        component: () => import('../views/index9'),
    },
    {
        path: '/index-10',
        component: () => import('../views/index10'),
    },
    {
        path: '/index-11',
        component: () => import('../views/index11'),
    },
    {
        path: '/index-12',
        component: () => import('../views/index12'),
    },
    {
        path: '/index-13',
        component: () => import('../views/index13'),
    },
    {
        path: '/index-14',
        component: () => import('../views/index14'),
    },
    {
        path: '/index-15',
        component: () => import('../views/index15'),
    },
    {
        path: '/index-16',
        component: () => import('../views/index16'),
    },
    {
        path: '/index-17',
        component: () => import('../views/index17'),
    },
    {
        path: '/index-18',
        component: () => import('../views/index18'),
    },
]

const router = createRouter({
    history: createWebHistory("/kerri/vue"), // Set the base path
    routes
})

export default router;