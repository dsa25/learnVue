<template>
  <div v-if="posts.length">
    <h3>List post:</h3>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <div v-else style="text-align: center">Постов нет</div>
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
