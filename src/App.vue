<template>
  <div id="app">
    <comp-header></comp-header>
    <div>
      <comp-featured></comp-featured>
      <comp-menu></comp-menu>
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
  import compHeader from './components/Header-footer/Header.vue'
  import compFooter from './components/Header-footer/Footer.vue'
  import compFeatured from './components/Featured/Index.vue'
  import compMenu from './components/Menu/Index.vue'


  export default{
    components: {
      compHeader,
      compFooter,
      compFeatured,
      compMenu
    }
  }
</script>

<style>
  @import './assets/style.css';
</style>
