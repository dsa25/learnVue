<template>
  <h5>id: {{ post.id }}</h5>
  <h3>{{ post.title }}</h3>
  <p class="">
    {{ post.body }}
    {{ post.body }}
    {{ post.body }}
  </p>
  <comments-post :comments="comments" />
</template>

<script>
import CommentsPost from "@/components/CommentsPost.vue"
export default {
  components: {
    CommentsPost,
  },
  data() {
    return {
      post: {},
      comments: [],
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
    async getCommentsPost() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`
        )
        this.comments = await res.json()
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getItemPost()
    this.getCommentsPost()
  },
}
</script>

<style></style>
