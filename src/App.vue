<template>
  <div class="app">
    <my-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from "@/components/MyMenu.vue"
export default {
  components: {
    MyMenu,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
.row {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 15px;
}
.menu a {
  display: inline-block;
  margin: 3px 10px;
  font-size: 18px;
}
.menu a.active {
  color: red;
}
</style>
