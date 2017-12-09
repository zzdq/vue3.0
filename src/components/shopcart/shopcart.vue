<template>
  <div>
    <!-- 1.0 展示购物车列表 -->
    <div class="shopCartItemStyle" v-for="(item,index) in shopCartList" :key="item.id">
      <!-- 开关 -->
      <mt-switch @change="statistics()" class="switchStyle" v-model="item.isSelect"></mt-switch>
      <!-- 商品缩略图 -->
      <div class="thumbImageStyle">
        <img :src="item.thumb_path" alt="">
      </div>
      <!-- 价格和数量 -->
      <div class="titleAndPriceStyle">
        <p>{{item.title}}</p>
        <p>
          <span></span>
          <span>商品数量:</span>
        </p>
      </div>
      <!-- 删除按钮 -->
      <mt-button　class="deleteButtonStyle" size="small" type="danger">删除</mt-button>
    </div>

    <!-- 2.0 展示统计信息 -->
    <div class="statisticsStyle">
      <div>
        <h4>总计(不含运费)</h4>
        <p>已经勾选商品
          <span>{{totalCount}}</span> 件,总价
          <span>{{totalPrice}}</span> 元</p>
      </div>
      <mt-button class="goToPayStyle" size="normal" type="danger">去结算</mt-button>
    </div>
  </div>
</template>
   
<style scoped>
.shopCartItemStyle {
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.switchStyle {
  margin-left: 5px;
}

.thumbImageStyle {
  max-width: 70px;
  height: 70px;
  border: 1px solid rgba(92, 92, 92, 0.3);
  padding: 3px;
  border-radius: 5px;
  margin-left: 5px;
}

.thumbImageStyle img {
  width: 100%;
  height: 100%;
}

.deleteButtonStyle {
  margin-right: 5px;
}

.titleAndPriceStyle {
  margin-left: 5px;
  flex: 1;
}

.titleAndPriceStyle p:first-child {
  color: #0094ff;
  font-size: 14px;
}

.titleAndPriceStyle p:last-child span:first-child {
  font-size: 16px;
  color: red;
}

.statisticsStyle {
  height: 100px;
  display: flex;
  background-color: rgba(92, 92, 92, 0.3);
  justify-content: space-between;
  align-items: center;
}

.statisticsStyle div:first-child {
  margin-left: 5px;
}

.statisticsStyle div:first-child span {
  color: red;
  font-size: 18px;
}

.goToPayStyle {
  margin-right: 5px;
}
</style>
   
<script>
import common from "../../common/common.js";
//  弹出确认框
import { MessageBox } from "mint-ui";

export default {
  data() {
    return {
      // 选中的商品数据
      goodslist1: [],
      totalCount: 0, //商品总数
      totalPrice: 0 //商品价格
    };
  },
  created() {
    //查询选中的商品详情
    this.getgoodstotal();
  },
  methods: {
    getgoodstotal() {
      // 取出仓库里的数组
      const goodslist = this.$store.getters.getGoodsList;
      // console.log(goodslist);
      // 如果数组里没有内容  就不渲染
      if (goodslist.length == 0) return;
      // 新建一个临时空对象
      var tempObj = {};
      goodslist.forEach(goods => {
        // 如果临时对象里已经有了这个id的商品就想加到对象中
        if (tempObj[goods.goodsId]) {
          tempObj[goods.goodsId] += goods.count;
        } else {
          tempObj[goods.goodsId] = goods.count;
        }
      });
      // 把{87:5,88:3}属性名称
    }
  }
};
</script>