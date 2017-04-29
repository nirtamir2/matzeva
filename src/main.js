import Vue from 'vue'
import App from './components/App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial);

// Vue.material.registerTheme('default', {
//   primary: {color:'blue',hue: 600},
//   accent: 'red',
//   warn: 'red',
//   background: 'white'
// })



new Vue({
    el: '#app',
    render: h => h(App),
});


