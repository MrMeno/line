<template>
      <div class="row" style='padding:10px 0'>
        <div class="col col-md-10 col-md-offset-1">
          <el-breadcrumb separator="/" >
              <el-breadcrumb-item v-for='items in urlList'>{{dispath(items)}}</el-breadcrumb-item>
            </el-breadcrumb> 
        </div>
       </div>
</template>
<script>
     export default {
     name:'breadcrumb',
     props:[''],
     mounted(){
      
     },
     data(){
      return {
      }
     },
     computed:{
      urlList:function(){
          return this.$store.state.url
      }
     },
     methods:{
      dispath(name){
        var c_name='';
            switch(name){
                case '/main':
                     c_name='主页'
                  break;
                case '/regist':
                    c_name='注册'
                break;
                case '/detail':
                     c_name='媒体详情'
                  break;
                   case '/userCenter':
                     c_name='用户中心'
                  break;
                 default:
                 c_name='主页'
              }
              return c_name
           }
         }
     }
</script>
<style>
.bre{
    font-size:12px;
    float:left;
    list-style: none
}
.bre li{
  width:30px;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>