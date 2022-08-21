<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <div><strong>name: </strong> {{ post.title }}</div>
    <div><strong>descript: </strong> {{ post.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: { type: Array, required: true },
  },
}
</script>

<style>
.post {
  padding: 15px;
  border-radius: 5px;
  border: 1px solid green;
  margin: 15px 0;
}
</style>
