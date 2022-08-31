<template>
  <h5>id: {{ post.id }}</h5>
  <h3>{{ post.title }}</h3>
  <p class="">
    {{ post.body }}
    {{ post.body }}
    {{ post.body }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    }
  },
  methods: {
    async getItemPost() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        )
        this.post = await res.json()
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getItemPost()
  },
}
</script>

<style></style>
