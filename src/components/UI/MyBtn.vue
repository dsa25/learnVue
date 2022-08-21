<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyBtn",
}
</script>

<style scoped>
.btn {
  display: block;
  padding: 5px 8px;
  border-radius: 3px;
  border: 1px solid gray;
  color: green;
}
</style>
