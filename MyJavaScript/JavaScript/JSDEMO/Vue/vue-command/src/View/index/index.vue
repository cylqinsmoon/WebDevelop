<template>
  <div>
    人员管理系统
    <foot-nav v-bind:class="{'isIndex':isNowPage}" class="text-muted"/> <!--isIndex是类名-->
  </div>
</template>

<script>
  //引入
  //  驼峰法命名组件引用时短线连接
  import FootNav from '../../components/footer'
    export default {
        name: "index",
      //注册
      components:{FootNav}, //此处为components
      data(){
          return{
            isNowPage:true
          }
      }
    }
</script>

<style scoped>
</style>
