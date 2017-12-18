import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入创建的组件页面
import Home from '../Home.vue'
import Category from '../Category.vue'
import ShoppingCart from '../Cart.vue'
import Me from '../Me.vue'

// 使用路由实例插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    // 交页面组件与 path 指定的路由关联
    { name: 'Home', path: '/home', component: Home },
    { name: 'Categories', path: '/categories', component: Category },
    { name: 'ShoppingCart',  path: '/shopping-cart', component: ShoppingCart },
    { name: 'Me', path: '/me', component: Me },
  ]
})
