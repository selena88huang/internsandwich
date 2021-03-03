import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './assets/bootstrap.min.css'

//Vue.component('Navbar',require(component/Navbar.vue).default);
Vue.config.productionTip = false

new Vue({
  router,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
