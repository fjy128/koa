import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueAMap from 'vue-amap'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.less'
// import './libs/common'
import common from './libs/common'

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.$common = common
Vue.prototype.$api = 'http://127.0.0.1:8000'

Vue.config.productionTip = false

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '43dc89a281dc12fcdbbe4230a54f25b9',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
