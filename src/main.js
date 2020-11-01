import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


//create global filter
Vue.filter('firstName', val => {
  if(!val || typeof(val) != 'string')
  return ''
  val = val.split(' ')
  val = val[0]
  return val
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
