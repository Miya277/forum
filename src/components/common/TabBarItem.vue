<template>
  <div class="tabbar-item">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :class="{active: isActive}">
      <slot name="item-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  // data () {
  //   return {
  //     isActive: false
  //   }
  // },
  computed: {
    isActive () {
      return true
    }
  }
}
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
}
.active {
  color: purple;
}
</style>
