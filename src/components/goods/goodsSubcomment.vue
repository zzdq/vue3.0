<template>
   <div>
       <subcomment :commentId="this.$route.query.goodsId"></subcomment>
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
   import subcomment from '../subcomponents/subcomment.vue'
   
   export default {
       components:{
         subcomment
       }
   }
</script>