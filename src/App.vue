<template>
  <div id="app">
    <comp-header></comp-header>
    <div>Content</div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
  import compHeader from './components/Header-footer/Header.vue'
  import compFooter from './components/Header-footer/Footer.vue'

  export default{
    components: {
      compHeader,
      compFooter
    }
  }
</script>

<style>
  @import './assets/style.css';
</style>
