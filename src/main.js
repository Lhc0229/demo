import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = 456
console.log(456)
Vue.config.productionTip ='8888'

new Vue({
  render: h => h(App),
}).$mount('#app')
