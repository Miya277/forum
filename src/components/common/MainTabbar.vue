<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainTabbar'
}
</script>

<style>
  #tabbar {
    height: 49px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #B7C7FF;
    box-shadow: 0px -1px 3px #B7C8FF;
  }
</style>
