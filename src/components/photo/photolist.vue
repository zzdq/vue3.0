<template>
    <div>
        <!-- 1.0 图片分类 -->
        <div class="photoCategoryStyle">
            <ul>
                <li @click="getphotoListData(0)">全部</li>
                <li @click="getphotoListData(item.id)" v-for="(item,index) in photolist" :key="index">{{item.title}}</li>
            </ul>
        </div>

        <!-- 2.0 图片列表 -->
        <div class="photoListStyle">
            <ul>
                <li v-for="item in photolistData" :key="item.id" >
                    <router-link :to="'/photo/photoinfo/'+item.id">
                        <img :src="item.img_url" alt="">
                        <p class="titleAndZhaiyaoStyle">
                            <span>{{item.title}}</span><br/> {{item.zhaiyao}}
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
   
<style scoped>
.photoCategoryStyle {
  overflow-x: auto;
}

/** 图片分类的样式 */
.photoCategoryStyle ul {
  margin: 3px 2px;
  padding: 0px 0px 12px 0px;
  white-space: nowrap;
}

.photoCategoryStyle ul li {
  list-style: none;
  display: inline-block;
  font-size: 16px;
  color: #0094ff;
  margin: 0px 3px;
}

/**
        图片列表的样式
    */
.photoListStyle ul {
  margin: 2px;
  padding: 0px 2px;
}

.photoListStyle ul li {
  list-style: none;
  position: relative;
}

img {
  width: 100%;
  height: 400px;
}

.titleAndZhaiyaoStyle {
  position: absolute;
  left: 2px;
  bottom: 2px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

.titleAndZhaiyaoStyle span {
  font-size: 16px;
  font-weight: 600;
}
</style>

   
<script>
import common from "../../common/common.js";

export default {
  data() {
    return {
      photolist: [], // 分类名称
      photolistData: []
    };
  },
  created() {
    this.getimgcategory();
    this.getphotoListData(0);
  },
  methods: {
    getimgcategory() {
      const url = common.apihost + "api/getimgcategory";
      this.$http.get(url).then(response => {
        console.log(response);
        this.photolist = response.body.message;
      });
    },
    // 这里要把photolist的id传过来
    getphotoListData(categoryId) {
      const url = common.apihost + "api/getimages/" + categoryId;
      this.$http.get(url).then(response => {
        // console.log(response);
        this.photolistData = response.body.message;
      });
    }
  }
};
</script>