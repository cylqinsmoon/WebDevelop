import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../View/index/index'
import Manage from '../View/manage/index'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path:'/',
      name:'Index',
      component:Index //此处为component
    },
    {
      path:'/manage',
      name:'Manage',
      component:Manage
    }
  ]
})
