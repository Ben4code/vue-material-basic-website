import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Vue material
import { MdButton, MdDrawer,  } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdDrawer)
// Vue.use(MdTabs)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
