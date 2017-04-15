import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import listItme from './components/Mzv-list-item.vue'
import speedDialer from './components/Mzv-speed-dialer.vue'
import statusPanel from './components/Mzv-status-buttons-panel.vue'

Vue.use(VueMaterial);

// Vue.material.registerTheme('default', {
//   primary: {color:'blue',hue: 600},
//   accent: 'red',
//   warn: 'red',
//   background: 'white'
// })

Vue.component('mzv-speed-dialer', speedDialer);
Vue.component('mzv-status-buttons-panel', statusPanel);
Vue.component('mzv-list-item', listItme);


new Vue({
    el: '#app',
    render: h => h(App),
});


