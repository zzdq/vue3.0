<template>
  <topBar :count="object.obj" />
  <el-container class="el-content">
    <el-aside width="200px">{{ object.obj }}</el-aside>
    <el-main>{{ plusOne }}</el-main>
  </el-container>
</template>

<script>
// getCurrentInstance 获取当前实例
import { getCurrentInstance, ref, reactive, onMounted, computed } from 'vue'
import topBar from '@/components/topBar.vue'

export default {
  components: {
    topBar
  },
  setup () {
    let count = ref(0)
    const object = reactive({ obj: 1 })

    const plusOne = computed(() => object.obj + +Math.random().toFixed(1))

    const { proxy, ctx } = getCurrentInstance()
    console.log(proxy, ctx);
    onMounted(() => {
      setInterval(() => {
        object.obj++
      }, 1000);
    })
    return {
      count,
      object,
      plusOne
    }
  }
}
</script>

<style scoped>
.el-content {
  height: calc(100% - 60px);
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>