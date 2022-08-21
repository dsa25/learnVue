<template>
  <div class="row">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue"
import PostList from "./components/PostList.vue"
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "js ", text: "text post 1" },
        { id: 2, title: "js 2", text: "text post 2" },
        { id: 3, title: "js 3", text: "text post 3" },
      ],
      title: "",
      text: "",
    }
  },
  methods: {
    createPost(post, two, three) {
      this.posts.push(post)
    },
  },
}
</script>

<style>
text {
  margin: 0;
}
* {
  box-sizing: border-box;
}
.row {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 15px;
}
</style>
