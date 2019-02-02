import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./views/home/index')
  },
  {
    path: '/houseList/:cityId',
    name: 'houseList',
    component: () => import('./views/houseList/index')
  },
  {
    path: '/hoseDetail/:Id',
    name: 'hoseDetail',
    component: () => import('./views/detail/hoseDetail')
  }
  ]
})
