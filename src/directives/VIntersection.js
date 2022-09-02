export default {
  mounted(el, binding) {
    console.log(el, binding)
    const options = {
      // root: document.querySelector(".wrList"),
      rootMargin: "0px",
      threshold: 1.0,
    }
    const callback = (entries, observer) => {
      /* Content excerpted, show below */
      //   if (entries[0].isIntersecting && this.page < this.totalPages) {
      if (entries[0].isIntersecting) {
        // this.loadMorePosts()
        binding.value.loadMorePosts()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    // observer.observe(this.$refs.observer)
    observer.observe(el)
  },
}
