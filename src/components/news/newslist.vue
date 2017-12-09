<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newslistArray" :key="item.id">
        <router-link :to="'/news/newslist/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p class="titleStyle">{{item.title}}</p>
            <p>
              <span class="mui-pull-left mui-ellipsis">{{item.add_time | fmtDate()}}</span>
              <span class="mui-pull-right mui-ellipsis">点击数{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.mui-media-object img {
  width: 65px;
  height: 65px;
}
.mui-table-view-cell {
  height: 80px;
}


.titleStyle {
  font-size: 14px;
  color: gray;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.mui-ellipsis {
  color: #0094ff;
  font-size: 12px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
</style>


<script>
// 导入公共的对象
import common from "../../common/common.js";
//导出
export default {
  data() {
    return {
      newslistArray: []
    };
  },
  created() {
    this.getNewlistData();
  },
  methods: {
    // 获取新闻列表的数据
    getNewlistData() {
      const url = common.apihost + "api/getnewslist";
      this.$http.get(url).then(response => {
        // console.log(response);
        this.newslistArray = response.body.message;
      });
    }
  }
};
</script>