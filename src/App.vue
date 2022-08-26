<template>
  <div class="row">
    <h1>Page posts</h1>
    <my-input v-model="searchQuery" placeholder="поиск..." />
    <div class="app__btns">
      <my-btn @click="fetchPost">Получить посты</my-btn>
      <my-btn @click="showDialog">Создать пост</my-btn>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="visibleDialog">
      <PostForm @create="createPost" />
    </my-dialog>
    <div class="list__head">
      <h3>List post:</h3>
      <my-pagination
        @changePage="changePagination"
        :countPages="totalPages"
        :page="page"
      />
    </div>
    <PostList
      :posts="sortedPostsAndSearchPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
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
      searchQuery: "",
      visibleDialog: false,
      isPostLoading: false,
      selectedSort: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по содержимому" },
      ],
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
    changePagination(pageNumber) {
      this.page = pageNumber
      // this.fetchPost()
    },
    async fetchPost() {
      try {
        this.isPostLoading = true
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`
        )
        this.totalPages = Math.ceil(
          res.headers.get("x-total-count") / this.limit
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      )
    },
    sortedPostsAndSearchPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
  },
  watch: {
    page() {
      // DevTools failed to load source map:
      // Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/browser-polyfill.js.map: System error: net::ERR_FILE_NOT_FOUND
      this.fetchPost()
    },
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     // return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // },
    // visibleDialog(newValue) {
    //   console.log(newValue)
    // },
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
.app__btns {
  display: flex;
  justify-content: space-between;
}
.list__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
