<template>
  <div id="app">
    <router-view></router-view>
    <main-tabber>
      <tab-bar-item>
          <img slot="item-img" src="./assets/img/tabbar/square.png">
          <img slot="item-img" src="./assets/img/tabbar/square_active.png">
          <div slot="item-img">广场</div>
      </tab-bar-item>
    </main-tabber>
  </div>
</template>

<script>
import MainTabber from './components/common/MainTabbar'
import TabBarItem from './components/common/TabBarItem'
export default {
  name: 'app',
  components: {
    MainTabber,
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
