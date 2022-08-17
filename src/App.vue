<template>
  <div class="wr_likes">
    <button v-on:click="addLIke">Like</button>
    <button @click="Dizlike">Dizlike</button>
    <div>conunt likes: {{ likes }}</div>
    <div>conunt dizlikes: {{ dizlikes }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dizlikes: 0,
    }
  },
  methods: {
    addLIke() {
      this.likes += 1
    },
    Dizlike() {
      this.dizlikes += 1
    },
  },
}
</script>

<style>
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
.wr_likes {
  padding: 30px;
  margin: 0 auto;
  width: 300px;
}
button {
  margin: 0 3px;
}
</style>
