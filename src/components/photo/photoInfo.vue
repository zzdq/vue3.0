<template>
  <div>
    <!-- 标题 -->
    <div class="titleStyle">
      <h4>{{photolistinfo.title}}</h4>
      <p>{{photolistinfo.add_time | fmtDate('YYYY-MM-DD')}}&nbsp;&nbsp;{{photolistinfo.click}}次点击</p>
    </div>
    <!-- 缩略图 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li v-for="(item,index) in photoThumbImage" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- 点击的下标和数组 -->
        <img @click="$preview.open(index, photoThumbImage)" class="preview-img" :src="item.src" height="100">
      </li>
    </ul>
    <!-- 内容 -->
    <div class="conentStyle">
      <p v-html="photolistinfo.content"></p>
    </div>

    <!-- 评论 -->
    <subcomponnets :commentId="this.$route.params.photoId"></subcomponnets>
  </div>
</template>
   
<style scoped>
.titleStyle,
.contentStyle {
  padding: 6px;
}

h4 {
  font-size: 16px;
  color: #0094ff;
}

.contentStyle p {
  color: gray;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}

.mui-grid-view.mui-grid-9 {
  border: none;
}
</style>
   
<script>
import common from "../../common/common.js";
// 导入评论子组件
import subcomponnets from "../subcomponents/subcomment.vue";

export default {
  data() {
    return {
      photolistinfo: {},
      photoThumbImage:[]
    };
  },
 
  created() {
    this.getphotoinfoData();
    this.getThumbImage();
  },
  methods: {
    getphotoinfoData() {
      const url = common.apihost + 'api/getimageInfo/' + this.$route.params.photoId
      this.$http.get(url).then(response=>{
        // console.log(response);
        this.photolistinfo = response.body.message[0]
      })
    },
    getThumbImage(){
      const url = common.apihost + 'api/getthumimages/' + this.$route.params.photoId
      this.$http.get(url).then(response=>{
        // console.log(response.body.message);
        response.body.message.forEach(item=>{
          // 设置的预览图片的大小
          item.w = 600
          item.h = 600
        });
        this.photoThumbImage = response.body.message
      })
    }
  },
  // 子组件
  components:{
    subcomponnets
  }
};
</script>

