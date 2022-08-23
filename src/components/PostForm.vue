<template>
  <form @submit.prevent>
    <p>Создание поста</p>
    <span>{{ post.title }}</span>
    <my-input v-model="post.title" placeholder="name" />
    <span>{{ post.body }}</span>
    <my-input v-model="post.body" placeholder="description" />
    <MyBtn style="margin-left: auto" @click="createPost">Create</MyBtn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit("create", this.post)
      this.post = {
        title: "",
        body: "",
      }
    },
  },
}
</script>

<style>
form {
  padding: 20px 50px;
}
</style>
