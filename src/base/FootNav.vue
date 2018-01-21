<template>
    <footer>
        <router-link to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/list">
            <i class="iconfont icon-liebiaoyemian"></i>
            <span>列表</span>
        </router-link>
        <router-link to="/shop">
            <i class="iconfont icon-shoucang"></i>
            <span>购物车</span>
        </router-link>
        <router-link to="/add">
            <i class="iconfont icon-add"></i>
            <span>添加</span>
        </router-link>
    </footer>
</template>

<script>
    export default {
        name: "foot-nav"
    };
</script>

<style lang="less" scoped>
    footer {
        display: flex;
        a {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #007aff;
            &.active {
                background: #007aff;
                color: #fff;
            }
        }
    }
</style>
