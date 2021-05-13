<template>
  <div id="app">
    <!-- Loading comp sits at the app level so that it sits over all page layout -->
    <!-- You can also have it in the base page layout if you are using one -->
    <PageLoader />

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PageLoader from './components/PageLoader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PageLoader
  }
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
