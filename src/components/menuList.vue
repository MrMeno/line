<template>
 <div class="col col-md-3">
                <el-dropdown style='padding-top:30px'  v-if='$store.state.login'>
                  <span class="el-dropdown-link">
                   Kate Liana<i class="el-icon-caret-bottom el-icon--right"></i>
                 </span>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                <i class="fa fa-user-circle" aria-hidden="true">
                </i>
                <span class='space'>认证为广告主</span>
                </el-dropdown-item>
                <el-dropdown-item>
                <i class="fa fa-file-video-o" aria-hidden="true">
                </i>
                <span class='space'>认证为媒体主</span>
                </el-dropdown-item>
                <el-dropdown-item>
                <i class="fa fa-list-alt" aria-hidden="true">
                </i>
                <span class='space'>我的订单</span>
                </el-dropdown-item>
                <el-dropdown-item>
                <i class="fa fa-user-plus" aria-hidden="true"></i>
                <span class='space'><router-link to="/userCenter">个人中心</router-link></span>
                </el-dropdown-item>
               <el-dropdown-item>
               <i class="fa fa-user-plus" aria-hidden="true"></i>
               <span class='space'>帮助中心</span>
               </el-dropdown-item>
               <el-dropdown-item>
               <i class="fa fa-sign-out" aria-hidden="true"></i>
               <span class='space'>退出</span>
               </el-dropdown-item>
               </el-dropdown-menu>
          </el-dropdown>
          <div class="row" style='padding-top:30px;font-size:13px' v-else>
          <div class="col col-md-6 text-right"><router-link to='/login'>登录</router-link></div>
          <div class="col col-md-6 text-left"><router-link to='/regist'>注册</router-link></div>
          </div>

            </div>
</template>
<script>
     export default {
     name:'menuList',
     props:['']
     }
</script>
<style>
</style>