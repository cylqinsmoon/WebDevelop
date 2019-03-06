<template>
    <div class="footer" id="dhl">
      <ul class="nav justify-content-center nav-pills nav-fill fixed-bottom bg-warning">
        <li class="nav-item"><router-link to="/" class="nav-link">首页</router-link></li> <!--组件支持用户在具有路由功能的应用中点击导航。通过to属性指定目标地址-->
        <li class="nav-item"><router-link to="/manage" class="nav-link">人员管理</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>
<!--style标签上添加scoped属性以表示它的只属于当下的模块-->
<style scoped>

</style>
