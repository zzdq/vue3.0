<template>
  <div>
    <div class="titleStyle">
      <h3>{{newslistArray.title}}</h3>
      <p>{{newslistArray.add_time | fmtDate}}&nbsp;&nbsp;{{newslistArray.click}}次浏览&nbsp;&nbsp;分类:民生经济</p>
    </div>
    <div class="contentStyle">
      <p v-html="newslistArray.content"></p>
    </div>
    <!-- 评论 -->
    <!-- 把文章的ID传过去 -->
    <subcomment :commentId="this.$route.params.newsId"></subcomment>
  </div>
</template>

<style scoped>
.titleStyle {
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
  padding-bottom: 0;
}
h3 {
  font-size: 16px;
  color: #0094ff;
}

.titleStyle,
.contentStyle {
  padding: 6px;
}
</style>

<script>
// 导入commonjs
import common from "../../common/common.js";
// 引入评论子组件
import subcomment from "../../components/subcomponents/subcomment.vue";
export default {
  data() {
    return {
      newslistArray: {} //放返回的数据
    };
  },
  // 进来会调用它
  created() {
    this.newslistData();
  },
  methods: {
    newslistData() {
      // this.$route.params.newsId url后的参数
      const url = common.apihost + "api/getnew/" + this.$route.params.newsId;
      this.$http.get(url).then(response => {
        // console.log(response);
        // 把获取到的数据存到newslistArray数组中
        this.newslistArray = response.body.message[0];
      });
    }
  },
  // 评论组件
  components: {
    subcomment: subcomment
  }
};
</script>


