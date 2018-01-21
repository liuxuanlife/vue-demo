import Vue from 'vue';
import App from './App';
import router from './router';

// swiper
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);
require('swiper/dist/css/swiper.css');

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

new Vue({
    el: '#app',
    router,
    ...App
});





