import { ref, onMounted } from "vue"

export default function usePosts(limit) {
  const posts = ref([])
  //   const totalPages = ref(0)
  const isPostsLoading = ref(true)
  const fething = async () => {
    try {
      // this.isPostsLoading = true
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=1`
      )
      //   totalPages.value = Math.ceil(res.headers.get("x-total-count") / limit)
      posts.value = await res.json()
    } catch (error) {
      // alert(error)
      console.log(error)
    } finally {
      isPostsLoading.value = false
    }
  }

  //   различные лайв-сайкл методы:
  onMounted(fething)
  //   onCreated()
  //   computed()
  //   watch()

  return {
    posts,
    isPostsLoading,
    // totalPages,
  }
}
