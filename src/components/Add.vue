<template>
    <div class="content">
        <TopNav>添加图书</TopNav>
        <div class="wrap">
            <ul class="addList">
                <li>
                    <p>图书名称</p>
                    <input type="text" @input="isVal" value="book.bookName" v-model="book.bookName">
                </li>
                <li>
                    <p>图书介绍</p>
                    <input type="text" value="book.bookInfo" v-model="book.bookInfo">
                </li>
                <li>
                    <p>图书价格</p>
                    <input type="text" value="book.bookPrice" v-model="book.bookPrice">
                </li>
                <li>
                    <p>图书封面</p>
                    <input type="text" value="book.bookCover" v-model="book.bookCover">
                </li>
                <li class="btn">
                    <button @click="add">添加图书</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import TopNav from '../base/TopNav';
    import {addOneBook} from "../api";

    export default {
        name: "add",
        data() {
            return {book: {}};
        },
        methods: {
            async add() {
                await addOneBook(this.book);
                this.$router.push('/list');

            }
        },
        components: {TopNav},
        computed: {

        }
    };
</script>

<style lang="less" scoped>
    .addList {
        padding: 20px 20px;
        overflow: hidden;
        li {
            margin-bottom: 15px;
            overflow: hidden;
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
                &.red {
                    border-color: red;
                }
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
