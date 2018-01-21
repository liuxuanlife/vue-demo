import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: () => import('../components/Home.vue'),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/list',
            component: () => import('../components/List.vue'),
            meta: {
                title: '列表页'
            }
        },
        {
            path: '/shop',
            component: () => import('../components/Shop.vue'),
            meta: {
                title: '购物车'
            }
        },
        {
            path: '/add',
            component: () => import('../components/Add.vue'),
            meta: {
                title: '添加'
            }
        },
        {
            path: '/detail/:bid',
            name: 'detail',
            component: () => import('../components/Detail.vue'),
            meta: {
                title: '详情页'
            }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ],
    linkActiveClass: 'active'
});



