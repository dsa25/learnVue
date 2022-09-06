export const postModule = {
  state: () => {
    return {
      posts: [
        // { id: 1, title: "js ", text: "text post 1" },
      ],
      title: "",
      body: "",
      searchQuery: "",
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
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      )
    },
    sortedPostsAndSearchPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, bool) {
      state.isPostLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
      //   console.log("selectedSort", selectedSort)
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true)
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}&_page=${state.page}`
        )
        commit(
          "setTotalPages",
          Math.ceil(res.headers.get("x-total-count") / state.limit)
        )
        commit("setPosts", await res.json())
      } catch (error) {
        // alert(error)
        console.log(error)
      } finally {
        commit("setLoading", false)
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit("setPage", state.page + 1)
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}&_page=${state.page}`
        )
        commit(
          "seTotalPages",
          Math.ceil(res.headers.get("x-total-count") / state.limit)
        )
        let newPosts = await res.json()
        commit("setPosts", [...state.posts, ...newPosts])
      } catch (error) {
        // alert(error)
        console.log(error)
      }
    },
  },
  namespaced: true,
}
