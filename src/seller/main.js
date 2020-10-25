import Vue from 'vue'
import App from './App'
import mixin from "./mixin"

Vue.config.productionTip = false

App.mpType = 'app'

Vue.mixin(mixin)

const app = new Vue({
  ...App
})
app.$mount()
