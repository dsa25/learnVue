<template>
  <div class="post">
    <div>
      <div><strong>name: </strong> {{ post.title }}</div>
      <div><strong>descript: </strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <MyBtn @click="$emit('remove', post)">X</MyBtn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true },
  },
}
</script>

<style>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid green;
  margin: 15px 0;
}
</style>
