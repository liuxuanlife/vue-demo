<template>
  <header>
    <slot></slot>
    <i class="iconfont icon-fanhui" @click="$router.go(-1)" v-if="back"></i>
  </header>
</template>
<script>
  export default {
    name: "top-nav",
    props: {
      back: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
