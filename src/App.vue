<template>
  <div class="row">
    <h1>Page posts</h1>
    <my-btn @click="fetchPost">Получить посты</my-btn>
    <my-btn @click="showDialog">Создать пост</my-btn>
    <my-dialog v-model:show="visibleDialog">
      <PostForm @create="createPost" />
    </my-dialog>
    <PostList :posts="posts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else style="text-align: center; padding: 15px">
      Идет загрузка ...
    </div>
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
        // { id: 1, title: "js ", text: "text post 1" },
        // { id: 2, title: "js 2", text: "text post 2" },
        // { id: 3, title: "js 3", text: "text post 3" },
      ],
      title: "",
      body: "",
      visibleDialog: false,
      isPostLoading: false,
    }
  },
  methods: {
    createPost(post, two, three) {
      this.posts.push(post)
      this.visibleDialog = false
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    showDialog() {
      this.visibleDialog = true
    },
    async fetchPost() {
      try {
        this.isPostLoading = true
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        )
        this.posts = await res.json()
      } catch (error) {
        // alert(error)
        console.log(error)
      } finally {
        this.isPostLoading = false
      }
    },
  },
  mounted() {
    this.fetchPost()
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
