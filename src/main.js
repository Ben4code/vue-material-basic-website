import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Vue material
import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

//Vue Resource
import VueResource from 'vue-resource'

//Vue Scrool Reveal
import VueScroolReveal from 'vue-scroll-reveal';

//Import Velocity
//import Velocity from 'velocity'

// Vue.use(Velocity);

Vue.use(VueResource);
Vue.use(VueScroolReveal, {
   duration: 800,
   scale: 1,
   distance: '50px'
})

Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(MdCard)
// Vue.use(MdTabs)

Vue.config.productionTip = false

//Setup Endpoint
Vue.http.options.root = "https://donongo-44cac.firebaseio.com/";

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
