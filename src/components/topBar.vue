<template>
  <div>
    <el-header>{{ count }}</el-header>
  </div>
</template>

<script>

export default {
  props: {
    count: {
      type: [Number, String],
      default: ''
    }
  },
  setup () {

  }
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>