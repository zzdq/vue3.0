<template>
  <div>
    <!-- 评论提交区域 -->
    <div class="postCommentStyle">
      <h4>提交评论</h4>
      <textarea name="" ref="textareaRef" id="" cols="30" rows="7" placeholder="请输入评论内容"></textarea>
      <mt-button @click="postComment" type="primary" class="mint-button mint-button--primary mint-button--large">提交评论</mt-button>
    </div>
    <!-- 展示评论列表区域 -->
    <div class="commentListStyle">
      <h4>评论列表</h4>
      <div v-for="(item,index) in comment" :key="index" class="commentItemStyle">
        <p>{{item.content}}</p>
        <p>
          <span>{{item.user_name}}</span>
          <span>{{item.add_time | fmtDate}}</span>
        </p>
      </div>
      <mt-button @click="loadMore()" class="loadMoreStyle" type="danger" plain size="large">加载更加</mt-button>
    </div>
  </div>
</template>

<style scoped>
.postCommentStyle,
.commentListStyle {
  padding: 6px;
}

h4 {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.commentItemStyle {
  height: 100px;
  overflow-y: auto;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.loadMoreStyle {
  margin-top: 15px;
  margin-bottom: 10px;
}

.commentItemStyle p:first-child {
  margin-top: 5px;
  color: black;
  font-size: 14px;
}

.commentItemStyle p:last-child {
  margin-top: 40px;
  color: #0094ff;
  display: flex;
  justify-content: space-between;
}
</style>


<script>
// 导入公共样式
import common from "../../common/common.js";

// 提示信息
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comment: [], //放评论数据
      pageIndex: 1 //页码
    };
  },
  // 要在函数调用之前 声明props 获取到父组件的id
  props: ["commentId"],
  created() {
    this.getCommentData(); // 查询评论数据
  },
  methods: {
    getCommentData() {
      const url =
        common.apihost +
        "api/getcomments/" +
        this.commentId +
        "?pageindex=" +
        this.pageIndex;
      // 拿数据
      this.$http.get(url).then(response => {
        // console.log(response);
        // 加载更多，判断页数是否是1，不是的话就往数组里面加数据
        if (this.pageIndex == 1) {
          this.comment = response.body.message;
        } else {
          // concat用于连接两个或多个数组
          this.comment = this.comment.concat(response.body.message);
        }
      });
    },
    loadMore() {
      this.pageIndex++;
      this.getCommentData();
    },
    postComment() {
      // 获取到输入框的内容
      const content = this.$refs.textareaRef.value;
      // console.log(content.trim().length);
      if (content == "" || content.trim().length == 0) {
        Toast({
          message: "内容不能为空",
          position: "middle",
          duration: 3000
        });
        return;
      }
      // 提交评论 用post请求
      const url = common.apihost + "api/postcomment/" + this.commentId;
      // 发送请求
      this.$http.post(url, { content: content }, { emulateJSON: true }).then(response => {
          // console.log(response);
          // 清空输入框里面的内容
          this.$refs.textareaRef.value = "";
          if (status == 0) {
            Toast({
              message: response.body.message,
              position: "middle",
              duration: 3000
            });
            // 重新刷新页面
            this.pageIndex = 1;
            this.getCommentData();
          }
        });
    }
  }
};
</script>