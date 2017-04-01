import Vue from 'vue'
import App from './App.vue'
import listItme from './Mzv-list-item.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.component('mzv-list-item', listItme)

new Vue({
  el: '#app',
  render: h => h(App)
})


