<template>
  <div id="app" class="container">
    
  </div>
  <main-wrapper/>
</template>

<script>
import MainWrapper from './components/MainWrapper.vue';

export default {
  name: 'App',
  components: {
    MainWrapper
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

.container {
  width: 100%;
  max-width: 1200px;
}
</style>
