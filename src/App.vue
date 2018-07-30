<template>
  <div>
      <div class="header">
          <router-link to="/list" class="header-title">电商网站示例</router-link>
          <div class="header-menu">
              <router-link to="/cart" class="header-menu-cart">
                  购物车
                  <span v-if="cartList.length">{{ cartList.length }}</span>
              </router-link>
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  }
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  padding-top: 200px;
  text-align: center;
  font-size: 24px;
  color: #f33;
}
</style>