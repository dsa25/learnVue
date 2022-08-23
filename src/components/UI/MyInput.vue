<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: 7px 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 1px solid green;
}
</style>
