<template>
  <div>
    <el-header>{{ count }}</el-header>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  count: {
    type: [Number, String],
    default: ''
  }
})
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>