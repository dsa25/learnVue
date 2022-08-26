<template>
  <div v-if="posts.length">
    <transition-group name="post-list">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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
<style>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
.post-list-move {
  transition: transform 0.5s ease;
}
</style>
