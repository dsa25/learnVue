<template>
  <h3>List post:</h3>
  <PostItem v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import PostItem from "./PostItem.vue"
export default {
  components: { PostItem },
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
