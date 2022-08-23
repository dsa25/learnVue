<template>
  <form @submit.prevent>
    <p>Создание поста</p>
    <span>{{ post.title }}</span>
    <my-input v-model="post.title" placeholder="name" />
    <span>{{ post.text }}</span>
    <my-input v-model="post.text" placeholder="description" />
    <MyBtn style="margin-left: auto" @click="createPost">Create</MyBtn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        text: "",
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit("create", this.post)
      this.post = {
        title: "",
        text: "",
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
