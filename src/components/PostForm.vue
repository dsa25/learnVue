<template>
  <form @submit.prevent>
    <span>{{ post.title }}</span>
    <input v-model="post.title" class="input" type="text" placeholder="name" />
    <span>{{ post.text }}</span>
    <input
      v-model="post.text"
      class="input"
      type="text"
      placeholder="description"
    />
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
      this.$emit("create", this.post, "test111111", "test 22222222222")
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
.input {
  display: block;
  width: 100%;
  padding: 7px 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 1px solid green;
}
</style>
