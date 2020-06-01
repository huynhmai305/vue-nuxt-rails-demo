import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import stores from './stores'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({routes})
new Vue({
  router,
  stores,
  render: h => h(App),
}).$mount('#app')
