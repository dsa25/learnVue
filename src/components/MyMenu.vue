<template>
  <div class="menu">
    <router-link to="/" :class="{ active: $route.path === '/' }"
      >index</router-link
    >
    <router-link to="/posts" :class="{ active: $route.path === '/posts' }"
      >posts</router-link
    >
    <router-link to="/about" :class="{ active: $route.path === '/about' }"
      >about</router-link
    >
    <router-link to="/store" :class="{ active: $route.path === '/store' }"
      >store</router-link
    >
    <router-link
      to="/composition"
      :class="{ active: $route.path === '/composition' }"
      >composition</router-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.menu a {
  margin: 3px 10px;
  font-size: 18px;
}
.menu a.active {
  color: red;
}
</style>
