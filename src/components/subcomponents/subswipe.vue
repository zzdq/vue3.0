<template>
    <div>
        <mt-swipe :auto="lunbo_time">
            <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
   
<style scoped>
/* 轮播图的样式 */
.mint-swipe {
  width: 100%;
  height: 250px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
   
<script>
import common from "../../common/common.js";

export default {
  // 父组件传过来的值
  props: ['lunbo_url', 'lunbo_time'],
  data() {
    return {
      lunboArray: [] //设置我们轮播图所需的模型
    };
  },
  // 这个方法是Vue的生命周期方法之一，当我们实现main.js之后，当home.vue被创建出来后就会调用
  created() {
    this.getLunboArrayData();
  },
  methods: {
    // 定义方法去拿到轮播图的数据
    getLunboArrayData() {
        // es6拼接多行字符串
      const url = `${common.apihost}${this.lunbo_url}`;
      console.log(url);
      // 发送给请求
      this.$http.get(url).then(response => {
        // console.log(response);
        // 把图片的路径循环出来赋给img属性
        response.body.message.forEach(item => {
          // 如果是对象里面的属性
          if(item.src){
            item.img = item.src
          }
        });
        // 把获取到数据添加到模型数据中
        this.lunboArray = response.body.message;
      });
    }
  }
};
</script>