<template>
 <div class="col col-md-3">
                <el-dropdown style='padding-top:30px'  v-if='$store.state.access_token!=null'>
                  <span class="el-dropdown-link">
                 {{userName}} <i class="el-icon-caret-bottom el-icon--right"></i>
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
               <span class='space' @click='logout()'>退出</span>
               </el-dropdown-item>
               </el-dropdown-menu>
          </el-dropdown>
          <div class="row" style='padding-top:30px;font-size:13px' v-else>
          <div class="col col-md-6 text-right" @click="dialogVisible = true">登录</div>
          <div class="col col-md-6 text-left"><router-link to='/regist'>注册</router-link></div>
          </div>

          <div class="row">
              <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
                <span>这是一段信息</span>
                   <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                       <el-button type="primary" @click="dialogVisible = false">登录</el-button>
                  </span>
          </el-dialog>
          </div>
            </div>
</template>
<script>
import axios from 'axios'
 import {setCookies} from '../directives/methods'
  import {getCookies} from '../directives/methods'
   import {delCookies} from '../directives/methods'
     export default {
     name:'menuList',
     props:[],
     computed:{
     },
     mounted(){
      this.userName=getCookies('username');
      this.login=getCookies('access_token')==null?false:true;
      this.$store.commit('SET_ACCESS_TOKEN',getCookies('access_token'));
      this.$store.commit('SET_LOGIN_STATE',this.login);
     },
     created(){
     },
     data(){
       return{
         userName:'',
         login:false,
        dialogVisible: false
          
       }
     },
     methods:{
       logout(){
         let self=this;
         axios.post('login/logout?access_token='+getCookies('access_token'))
         .then(function(res){
            if(res.data.ret==0){
               delCookies('access_token');
               delCookies('status');
               self.$alert("退出登录成功", '提示', {
               confirmButtonText: '确定',callback:function(){
                 window.location.reload();
               }});
            }
            else{
                 self.$alert("网络异常，请重试", '提示', {
               confirmButtonText: '确定'});
            }
         })
       },
         handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
     }

     }
</script>
<style>

</style>