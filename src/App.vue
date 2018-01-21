<template>
  <div id="app">
    <router-view></router-view>
    <FootNav></FootNav>
  </div>
</template>

<script>
  import FootNav from './base/FootNav';

  export default {
    name: "app",
    components: {
      FootNav
    }
  };
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    color: #222;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  input, button {
    -webkit-appearance: none;
  }

  .fadeIn-enter {
    opacity: 0;
  }

  .fadeIn-enter-active {
    transition: all 0.3s linear;
  }

  .fadeIn-leave-active {
    opacity: 0;
    transition: all 0.3s linear;
  }

  #app {
    display: flex;
    flex-flow: column;
    height: 100%;
    .content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-flow: column;
      .wrap {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
    header {
      height: 40px;
      background: #007aff;
      line-height: 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      i {
        position: absolute;
        left: 5px;
        font-size: 22px;
        padding: 0 10px;
      }
    }
    footer {
      height: 50px;
      border-top: 1px solid #ddd;
      overflow: hidden;
    }
  }
</style>
