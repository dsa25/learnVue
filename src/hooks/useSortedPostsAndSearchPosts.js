import { ref, computed } from "vue"

export default function useSortedPostsAndSearchPosts(sortedPosts) {
  const searchQuery = ref("")
  const sortedPostsAndSearchPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })

  return {
    searchQuery,
    sortedPostsAndSearchPosts,
  }
}
