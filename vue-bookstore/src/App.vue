<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <!-- 使用 router-link 指向定义的 path -->
        <li>
          <router-link :to="{ name: 'Home' }">
            <div><img src="./assets/images/home.svg"></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Categories' }">
            <div><img src="./assets/images/category.svg"></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ShoppingCart' }">
            <div><img src="./assets/images/cart.svg"></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Me' }">
            <div><img src="./assets/images/me.svg"></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- 用router-view 渲染视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
