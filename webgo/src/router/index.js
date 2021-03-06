import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/views/Login.vue'], resolve),
    hidden: true,
    meta: {title: 'ES6实战'}
  }
],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
