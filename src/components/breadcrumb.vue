<template>
          <div class="row" style='padding:10px 0'>
        <div class="col col-md-10 col-md-offset-1">
        <el-breadcrumb class='bre' separator="/">
           <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
       </div>
</template>
<script>
     export default {
     name:'breadcrumb',
     props:['']
     }
</script>
<style>
.bre{
    font-size:12px
}
</style>