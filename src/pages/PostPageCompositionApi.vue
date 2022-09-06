<template>
  <div class="row">
    <h1>Page posts composition</h1>
    <br />
    <my-input v-model="searchQuery" placeholder="поиск..." v-focus />
    <div class="app__btns">
      <span>{{ likes }}</span>
      <my-btn @click="addLike">addLike</my-btn>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <h3>List post:</h3>
    <PostList :posts="sortedPostsAndSearchPosts" v-if="!isPostsLoading" />
    <div v-else style="text-align: center; padding: 15px">
      Идет загрузка ...
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

import { ref } from "vue"
import usePosts from "@/hooks/usePosts"
import useSortedPosts from "@/hooks/useSortedPosts"
import useSortedPostsAndSearchPosts from "@/hooks/useSortedPostsAndSearchPosts"

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      visibleDialog: false,
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по содержимому" },
      ],
    }
  },
  setup(props) {
    const likes = ref(0)
    const addLike = () => {
      likes.value += 1
    }

    const { posts, isPostsLoading } = usePosts(3)
    const { selectedSort, sortedPosts } = useSortedPosts(posts)
    const { searchQuery, sortedPostsAndSearchPosts } =
      useSortedPostsAndSearchPosts(sortedPosts)

    return {
      likes,
      addLike,
      posts,
      isPostsLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedPostsAndSearchPosts,
    }
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
</style>
