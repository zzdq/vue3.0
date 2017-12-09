// 导入第三方包
import Vue from 'vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'



//基于Vue的第三方包，需要通过Vue.use(xxx)集成进来
Vue.use(Mint)
Vue.use(VueRouter) //Vue.prototype.$route,  Vue.prototype.$router
Vue.use(VueResource) //Vue.prototype.$http = VueResponse对象
Vue.use(VuePreview) //Vue.$preview
Vue.use(Vuex) //Vue.$store



//导入css样式
import 'mint-ui/lib/style.css'
import './statics/mui/css/mui.css'
import './statics/css/site.css'

// 和路由相关的代码
import home from './components/home/home.vue'
import category from './components/category/category.vue'
import shopcart from './components/shopcart/shopcart.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import subcomment from './components/subcomponents/subcomment.vue'
import photolist from './components/photo/photolist.vue'
import photoInfo from './components/photo/photoInfo.vue'
import goods from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import pictureAndText from './components/goods/pictureAndText.vue'
import goodsSubcomment from './components/goods/goodsSubcomment.vue'


// 导入App.vue
import App from './App.vue'

// 创建router实例，设置路由规则
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    }, // 重定向
    {
      path: '/home',
      component: home
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/news/newslist',
      component: newslist
    },
    {
      path: '/news/newslist/:newsId',
      component: newsinfo
    },
    {
      path: '/photo/photolist',
      component: photolist
    },
    {
      path: '/photo/photoInfo/:photoId',
      component: photoInfo
    },
    {
      path: '/goods/goodslist',
      component: goods
    },
    {
      path: '/goods/goodslist/:goodsId',
      component: goodsinfo
    },
    {
      path: '/goods/goodscomment',
      component: goodsSubcomment
    },
    {
      path: '/goods/pictureAndText/:goodsId',
      component: pictureAndText
    },
    {
      path: '/shopcart',
      component: shopcart
    }
  ]
})

// 过滤器
Vue.filter('fmtDate', (input, formatString) => {
  const lastFormatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  return moment(input).format(lastFormatString)
})

// 创建仓库
const store = new Vuex.Store({
  // 存储数据的地方
  state: {
    // 把获取的商品数量放到数组中
    goodslist: []
  },
  // 从仓库里取
  getters:{
    // 返回购物车中加入商品的总数
    getGoodsTotal(state){
      // 定义商品数量为0
      let goodsTotal = 0
      // 目的是取出存到goodslist里面的count
      state.goodslist.forEach(goods=>{
        goodsTotal+=goods.count
      })
      return goodsTotal
    },
    // 获取购物车中所有的数据  购物车的数据从这里取
    getGoodsList(state){
      return state.goodslist
    }
  },
  // 同步往仓库中存,可以直接操作state中的数据
  mutations: {
    // goodsinfo.vue调用这个 方法 ，把数据存进state的数组里
    addGoods(state,goods) {
      // console.log(goods);
      state.goodslist.push(goods)
    }
  },
  // actions  属于异步对象  必须通过mutations 去操作statede 数据
  actions:{
    addGoodsAsync(context,goods){
      setTimeout(()=>{
        context.commit('addGoods',goods)
      },2000)
    }
  }
})


// 创建根实例（Views-Model）,让根实例显示App.vue
new Vue({
  el: '#app',
  // 把仓库注入到根实例中
  store,
  // 路由功能
  router,
  // render:function(creatElement){
  //   return creatElement(App);
  // }
  render: h => h(App)
})