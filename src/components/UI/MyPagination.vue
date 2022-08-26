<template>
  <div class="pagination">
    <span
      v-for="pageNumber in countPages"
      :key="pageNumber"
      :class="{ pagination__current: pageNumber == page }"
      @click="changePagination(pageNumber)"
      >{{ pageNumber }}</span
    >
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  props: {
    countPages: Number,
    page: Number,
  },
  methods: {
    changePagination(pageNumber) {
      this.$emit("changePage", pageNumber)
    },
  },
}
</script>

<style scoped>
.pagination {
  padding: 15px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.pagination span {
  display: block;
  margin: 3px;
  width: 22px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  text-align: center;
  border: 1px solid green;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
}
.pagination span:hover:not(.pagination__current) {
  opacity: 0.8;
  color: green;
}
span.pagination__current {
  background: #60c163;
  border-color: #60c163;
  color: #fff;
}
</style>
