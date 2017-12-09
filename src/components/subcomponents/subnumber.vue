<template>
  <div>
    <div @click="minus()" class="left">-</div>
    <div class="middle">{{count}}</div>
    <div @click="add()" class="right">+</div>
  </div>
</template>

<style scoped>
.left,
.middle,
.right {
  display: inline-block;
  border: 1px solid rgba(92, 92, 92, 0.3);
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  margin-bottom: 6px;
}

.middle {
  width: 40px;
}
</style>
   
<script>
import common from "../../common/common.js";
// 导入

export default {
  props:['stockQuantity'],
  data() {
    return {
      count:1
    };
  },
  created() {

  },
  methods: {
    // 数量减一
    minus(){
      if(this.count<=1){
        return;
      }
      this.count -= 1;
      this.notify()
    },
    // 数量加一
    add(){
      if(this.count>=this.stockQuantity){
        return;
      }
      this.count += 1;
      this.notify()
    },
    //这个函数是告诉父组件现在值是多少
    notify(){
      this.$emit('countChange',this.count);
      // console.log(this.count);
    }
  }
};
</script>