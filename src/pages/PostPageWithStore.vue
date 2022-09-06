<template>
  <div class="row">
    <p class="">{{ $store.state.isAuth ? "авторизован" : "войти" }}</p>
    <div class="wr_likes">
      <div style="padding-right: 15px">
        <h5>likes: {{ $store.state.likes }}</h5>
        <h5>doubleLikes: {{ $store.getters.doubleLikes }}</h5>
      </div>
      <my-btn @click="$store.commit('incrementLikes')">Like</my-btn>
      <my-btn style="margin-left: 15px" @click="$store.commit('decrementLikes')"
        >DizLike</my-btn
      >
    </div>
    <h1>Page posts</h1>
    <h2>{{ $store.state.post.limit }}</h2>

    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="поиск..."
      v-focus
    />
    <div class="app__btns">
      <my-btn @click="fetchPosts">Получить посты</my-btn>
      <my-btn @click="showDialog">Создать пост</my-btn>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
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
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      visibleDialog: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
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
      this.setPage(pageNumber)
      // this.fetchPosts()
    },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      title: (state) => state.post.title,
      body: (state) => state.post.body,
      searchQuery: (state) => state.post.searchQuery,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedSort: (state) => state.post.selectedSort,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedPostsAndSearchPosts: "post/sortedPostsAndSearchPosts",
    }),
  },
  watch: {
    page() {
      this.fetchPosts()
    },
  },
}
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
}
.list__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wr_likes {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
