<template>
  <h5 style="margin-bottom: 10px">Comments:</h5>
  <div class="comment" v-for="comment in comments" :key="comment.id">
    <strong>{{ comment.email }} : </strong>
    <span> {{ comment.body }}</span>
    <span> ( {{ comment.id }} ) </span>
  </div>
</template>

<script>
export default {
  props: {
    comments: { type: Array, required: true },
  },
}
</script>

<style scoped>
.comment {
  padding: 0 10px;
  margin-bottom: 15px;
  max-width: 80%;
  font-size: 14px;
}
.comment strong {
  font-size: 16px;
}
</style>
