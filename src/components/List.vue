<template>
    <div class="content">
        <TopNav :back="true">列表页</TopNav>
        <div class="wrap">
            <ul class="bookList">
                <router-link tag="li" :to="{name:'detail',params:{bid:book.bookId }}" v-for="(book,index) in books"
                             :key="index">
                    <div class="photo"><img :src="book.bookCover"></div>
                    <div class="text">
                        <h4>{{book.bookName}}</h4>
                        <p>{{book.bookInfo}}</p>
                        <p><b>{{book.bookPrice}}</b></p>
                        <p>
                            <button @click.stop="remove(book.bookId)">删除</button>
                            <button @click.stop="">购买</button>
                        </p>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import TopNav from '../base/TopNav';
    import {getAllBook, removeOneBook} from "../api";

    export default {
        name: "list",
        data() {
            return {books: []};
        },
        components: {
            TopNav
        },
        created() {
            getAllBook().then(data => this.books = data);
        },
        methods: {
            async remove(id) {
                if (!confirm("您确定要删除吗?")) return;
                await removeOneBook(id);
                this.books = this.books.filter(item => item.bookId !== id);
            }
        }
    };
</script>

<style lang="less" scoped>
    .wrap {
        padding: 10px;
        overflow: hidden;
        li {
            overflow: hidden;
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            .photo {
                width: 30%;
                float: left;
                margin-right: 15px;
            }
            .text {
                overflow: hidden;
                h4 {
                    font-size: 16px;
                }
                p {
                    margin-top: 8px;
                    font-size: 14px;
                    b {
                        color: #f00;
                    }
                    button {
                        padding: 5px 12px;
                        background: #eee;
                        font-size: 12px;
                        border-radius: 5px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>
