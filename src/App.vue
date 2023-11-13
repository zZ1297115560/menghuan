<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HomePage msg="Welcome to Your Vue.js App"/> -->

  <div id="App">
    <!-- 任何全局组件如导航栏可以放在这里 -->
    <router-view></router-view> <!-- 路由渲染点 -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from './views/HomePage.vue'

export default {
  name: 'App',
  // components: {
  //   // HelloWorld
  //   HomePage
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
