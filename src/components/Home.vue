<template>
    <div class="content">
        <TopNav>首页</TopNav>
        <div class="wrap">
            <Swiper :swiperSlides="sliders"></Swiper>
            <div class="hotBook">
                <h3>热门图书</h3>
                <ul>
                    <router-link tag="li" :to="{name:'detail',params:{bid:hot.bookId }}" v-for="(hot,index) in hotBooks" :key="index">
                        <img :src="hot.bookCover">
                        <h4>{{hot.bookName}}</h4>
                        <!--<p class="hide-more-text">{{hot.bookInfo}}</p>-->
                        <p class="price">{{hot.bookPrice}}</p>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import TopNav from '../base/TopNav.vue';
    import Swiper from '../base/Swiper.vue';
    import {getSliders, getHotBook} from "../api";

    export default {
        data() {
            return {sliders: [], hotBooks: []};
        },
        created() {
            getSliders().then(data => this.sliders = data);
            getHotBook().then(data => this.hotBooks = data);
        },
        methods: {},
        components: {
            TopNav,
            Swiper
        }
    };
</script>

<style lang="less" scoped>
    .hotBook {
        padding: 10px;
        overflow: hidden;
        h3 {
            font-size: 18px;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            li {
                width: 50%;
                box-sizing: border-box;
                padding: 5px;
                margin-bottom: 10px;
                overflow: hidden;
                text-align: center;
                h4 {
                    font-size: 14px;
                    margin: 10px 0 5px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .price {
                    color: red;
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: bold;
                }
            }
        }
    }
</style>
