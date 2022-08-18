<template>
  <div class="row">
    <form @submit.prevent>
      <span>{{ title }}</span>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="name"
      />
      <span>{{ text }}</span>
      <input
        v-bind:value="text"
        @input="text = $event.target.value"
        class="input"
        type="text"
        placeholder="description"
      />
      <button @click="createPost">Create</button>
    </form>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>name: </strong> {{ post.title }}</div>
      <div><strong>descript: </strong> {{ post.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "js ", text: "text post 1" },
        { id: 2, title: "js 2", text: "text post 2" },
        { id: 3, title: "js 3", text: "text post 3" },
      ],
      title: "",
      text: "",
    }
  },
  methods: {
    createPost() {
      this.posts.push({
        id: this.posts.length,
        title: this.title,
        text: this.text,
      })
      this.title = ""
      this.text = ""
    },
  },
}
</script>

<style>
text {
  margin: 0;
}
* {
  box-sizing: border-box;
}
.row {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 15px;
}
.post {
  padding: 15px;
  border-radius: 5px;
  border: 1px solid green;
  margin: 15px 0;
}
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
button {
  margin: 0 0 0 auto;
  display: block;
  padding: 5px 8px;
  border-radius: 3px;
  border: 1px solid gray;
  color: green;
}
</style>
