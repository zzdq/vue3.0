<template>
  <div>
    <!-- 1.0 头部 -->
    <mt-header fixed title="Vue_Project"></mt-header>
    <span @click="goback()" v-show="isShowBack">&lt;&lt;</span>
    <!-- 2.0 中间内容 -->
    <router-view class="routerViewStyle"></router-view>
    <!-- 3.0 底部TabBar -->
    <mt-tabbar v-show="isShowTopBar" fixed>
      <mt-tab-item>
        <router-link to="/home">
          <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/category">
          <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
          
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/shopcart">
        <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
        <span v-show="this.badge" class="mui-badge">{{this.badge}}</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style scoped>
span {
  position: fixed;
  top: 10px;
  left: 8px;
  z-index: 2;
  font-size: 16px;
  color: white;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fafafa;
}
.mint-tab-item-label img {
  width: 42px;
  height: 35px;
}
.routerViewStyle {
  margin-top: 40px;
}
.mui-badge {
  font-size: 10px;
  line-height: 1.4;
  position: absolute;
  top: -2px;
  left: 65%;
  margin-left: -10px;
  padding: 1px 5px;
  color: white;
  background: red;
}
</style>

<script>
import bus from './common/commonvue.js'
export default {
  data() {
    return {
      isShowBack: false,
      isShowTopBar: true,
      badge: 0
    };
  },
  // 只调用一次
  created() {
    // 默认调用一次，保证强制刷新后不会出现底部导航条
    // console.log(this.$route.path);
    this.isShow(this.$route.path);

    // 1.把导出的vue对象存起来 const _this = this
    // 2.箭头函数没有this指向
    bus.$on("changeBadge", count => {
      // 这个this指向导出的vue对象
      this.badge += count;
    });
    // 3.改变this的指向 用bind
  },
  // 这个可以多次调用 ，更新状态  修改主页购物车的显示数据
  updated(){
    // 从仓库中取出购物车的总数
    this.badge = this.$store.getters.getGoodsTotal
  },
  methods: {
    // 返回上一个页面
    goback() {
      this.$router.go(-1);
    },
    // 判断页面的路径的函数   改变状态1.v-show  2.添加类  3.
    isShow(path) {
      // 如果页面不在主页，就让返回箭头显示出来，底部导航条隐藏
      if (path != "/home") {
        this.isShowBack = true;
        this.isShowTopBar = false;
      } else {
        this.isShowBack = false;
        this.isShowTopBar = true;
      }
    }
  },
  // 监听路由的变化
  watch: {
    $route(newValue, oldValue) {
      this.isShow(newValue.path);
    }
  }
};
</script>
