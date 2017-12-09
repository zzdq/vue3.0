<template>
  <div>
    <!-- 轮播图子组件 -->
    <div class="lunboStyle">
      <subswipe :lunbo_url="'api/getthumimages/'+this.$route.params.goodsId" :lunbo_time="3000"></subswipe>
    </div>
    <!-- 商品信息 -->
    <div class="goodsInfoStyle">
      <h5>{{goodslistData.title}}</h5>
      <!-- 商品数量 -->
      <subnumber v-on:countChange="getSubNumberCount" :stockQuantity="this.$route.params.stock_quantity"></subnumber>
      <mt-button type="primary" size="small">立即购买</mt-button>
      <mt-button @click="addToShopCart()" type="danger" size="small">加入购物车</mt-button>
      <p>市场价:￥
        <s>{{goodslistData.market_price}}</s>&nbsp;&nbsp;销售价：{{goodslistData.sell_price}}</p>
    </div>
    <!-- 商品参数 -->
    <div class="goodsParamsStyle">
      <h6>商品参数</h6>
      <ul>
        <li>商品货号:{{goodslistData.goods_no}}</li>
        <li>库存情况:剩余{{goodslistData.stock_quantity}}件</li>
        <li>上架时间:{{goodslistData.add_time | fmtDate}}</li>
      </ul>
    </div>

    <!-- 图文介绍&商品评论 -->
    <div class="pictureAndTextStyle">
      <mt-button @click="goToPictureAndText()" size="large" type="primary" :plain="true">图文介绍</mt-button>
      <mt-button @click="goToGoodsComment()" size="large" class="goodsCommentStyle" type="danger" :plain="true">商品评论</mt-button>
    </div>
  </div>
</template>
   
<style scoped>
.lunboStyle,
.goodsInfoStyle,
.goodsParamsStyle,
.pictureAndTextStyle {
  margin: 8px;
  border: 1px solid rgba(92, 92, 92, 0.3);
  border-radius: 5px;
  padding: 6px;
}

h5 {
  color: #0094ff;
  font-size: 16px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
  padding-bottom: 8px;
}

.goodsInfoStyle p span {
  color: red;
  font-size: 16px;
}

h6 {
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
  padding-bottom: 8px;
}

.goodsParamsStyle ul {
  margin: 0px;
  padding: 0px;
}

.goodsParamsStyle ul li {
  list-style: none;
  font-size: 14px;
}

.goodsCommentStyle {
  margin-top: 10px;
}
</style>
   
<script>
import common from "../../common/common.js";
// 导入busVue实例
// import bus from "../../common/commonvue.js";

// 导入轮播图组件
import subswipe from "../subcomponents/subswipe.vue";
// 评论组件
import subcomment from "../subcomponents/subcomment.vue";
// 导入数量组件
import subnumber from "../subcomponents/subnumber.vue";

import { Toast } from "mint-ui";

export default {
  // 父组件设置的值
  props: ["lunbo_url", "lunbo_time"],
  data() {
    return {
      goodslistData: {},
      //   设置默认的值是1
      goodsCount: 1
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    getgoodslist() {
      // 这里还是用文档给的路径去拿数据
      const url = `${common.apihost}api/goods/getinfo/${this.$route.params
        .goodsId}`;
      this.$http.get(url).then(response => {
        // console.log(response);
        this.goodslistData = response.body.message[0];
      });
    },
    // 跳到图文介绍
    goToPictureAndText() {
      this.$router.push({
        path: `/goods/pictureAndText/${this.$route.params.goodsId}`
      });
    },
    // 跳到评论页面
    goToGoodsComment() {
      // 把url的格式拼接成/goods/goodscomment?goodsId=87
      // 这种路径的拼接方法的会有把后面的数字放在this.$route,query里面
      this.$router.push({
        path: "/goods/goodscomment",
        query: { goodsId: this.$route.params.goodsId }
      });
      // console.log(this.$route);
    },
    // 将子组件传过来的值加一
    getSubNumberCount(count) {
      this.goodsCount = count;
      // console.log(this.goodsCount);
    },
    //加入购物车
    addToShopCart() {
      Toast({
        message: "加入购物车成功",
        position: "middle",
        duration: 2000
      });
      // 把this.goodsCount传递到App.vue中去，目的是为了更新购物车的状态
      // bus.$emit("changeBadge", this.goodsCount);
      // 把用户点击添加的商品信息存储到仓库中，方便存取
      const goods = {goodsId:this.$route.params.goodsId,count:this.goodsCount}
      // 同步的往仓库去存储数据
      this.$store.commit('addGoods',goods)
      // 异步的往仓库中去存储数据
      // this.$store.dispatch('addGoodsAsync',goods)
    }
  },
  components: {
    // 轮播图组件
    subswipe,
    // 商品数量
    subnumber
  }
};
</script>