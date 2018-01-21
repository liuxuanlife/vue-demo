<template>
    <div class="content">
        <TopNav :back="true">详情页</TopNav>
        <div class="wrap">
            <ul class="detailList">
                <li class="img">
                    <img :src="book.bookCover" alt="">
                </li>
                <li>
                    <p>图书名称</p>
                    <input type="text" v-model="book.bookName">
                </li>
                <li>
                    <p>图书介绍</p>
                    <input type="text" v-model="book.bookInfo">
                </li>
                <li>
                    <p>图书价格</p>
                    <input type="text" v-model="book.bookPrice">
                </li>
                <li class="btn">
                    <button @click="update">确定修改</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import TopNav from '../base/TopNav';
    import {findOneBook, updataBook} from "../api";

    export default {
        name: "detail",
        data() {
            return {book: []};
        },
        created() {
            findOneBook(this.$route.params.bid).then(data => this.book = data);
        },
        methods: {
            async update() {
                await updataBook(this.book.bookId, this.book);
                this.$router.push('/list');
            }
        },
        components: {
            TopNav
        }
    };
</script>

<style lang="less" scoped>
    .detailList {
        padding: 20px 20px;
        overflow: hidden;
        li {
            margin-bottom: 15px;
            overflow: hidden;
            &.img {
                text-align: center;
                img {
                    max-height: 150px;
                }
            }
            p {
                font-size: 16px;
                line-height: 1.8;
            }
            input {
                width: 100%;
                height: 30px;
                outline: none;
                margin-top: 5px;
                border: 1px solid #ccc;
                text-indent: .5em;
                font-size: 14px;
                border-radius: 2px;
                box-sizing: border-box;
            }
            button {
                width: 100%;
                margin-top: 10px;
                height: 35px;
                line-height: 35px;
                background: #007aff;
                color: #fff;
                border: none;
                border-radius: 5px;
                font-size: 15px;
            }
        }
    }
</style>
