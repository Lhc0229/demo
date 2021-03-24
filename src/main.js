import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = 456
console.log(123)
Vue.config.productionTip ='nggggg'

new Vue({
  render: h => h(App),
}).$mount('#app')
