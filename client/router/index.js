import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Create from '../views/Create'
import Download from '../views/Download'
import About from '../views/About'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/download',
      component: Download
    }
  ]
})
