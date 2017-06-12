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
          <div class="col col-md-6 text-right" style='cursor:pointer'><a @click="dialogVisible = true">登录</a></div>
          <div class="col col-md-6 text-left" style='cursor:pointer'><router-link to='/regist'><span>注册</span></router-link></div>
          </div>
          <div class="row">
            <div class="col col-md-12">  
              <el-dialog title="登录" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
                        <span class='dialog-body'>
                            <div class="row">
                              <div class="col col-md-2 text-right">
                                用户名
                              </div>
                              <div class="col col-md-10">
                                <el-input v-model='userName' style='width:90%'></el-input>
                              </div>
                            </div>

                             <div class="row"  style='padding-top:30px'>
                              <div class="col col-md-2 text-right">
                                密码
                              </div>
                              <div class="col col-md-10">
                                <el-input v-model='password' type='password' style='width:90%'></el-input>
                              </div>
                            </div>
                        </span>
                        <span slot="footer" class="dialog-footer">
                          <div class="row">
                            <div class="col col-md-5 col-md-offset-1 text-left">
                              <router-link to='/regist' style='font-size:12px'><span @click='dialogVisible = false'>立即注册</span></router-link>
                            </div>
                             <div class="col col-md-4 col-md-offset-1 text-right">
                              <router-link style='font-size:12px' to='/psd'><span @click='dialogVisible = false'>忘记密码</span></router-link>
                            </div>
                          </div>
                          <div class="row" style='padding-top:30px'>
                            <div class="col col-md-6 text-right">
                              <button class='btn btn-default' @click="dialogVisible = false">取消</button>
                          
                            </div>
                            <div class="col col-md-6 text-left">
                              <button class="btn btn-danger" ><span @click="logins">登录</span></button>
                            </div>
                          </div>
                      </span>
                 </el-dialog>
            </div>
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
      console.log(this.userName)
      this.login=getCookies('access_token')==null?false:true;
      this.$store.commit('SET_ACCESS_TOKEN',getCookies('access_token'));
      this.$store.commit('SET_LOGIN_STATE',this.login);
      if(this.login)
      {
         if(getCookies('status_'+this.userName)==1||getCookies('status_'+this.userName)==undefined)
         {
               setCookies('status_'+this.userName,2,2*365)       
         }
      }
     },
     created(){
     },
     data(){
       return{
         userName:'',
         login:false,
         password:'',
         dialogVisible: false
       }
     },
     methods:{
       logout(){
         let self=this;
         axios.post('/login/logout?access_token='+getCookies('access_token'))
         .then(function(res){
            if(res.data.ret==0){
               delCookies('access_token');
               self.$alert("退出登录成功", '登录', {
               confirmButtonText: '确定',
               callback:function(){
                 window.location.reload();
               }});
            }
            else{
                 self.$alert("网络异常，请重试", '登录', 
                 {confirmButtonText: '确定'}
                 
                 )}
         })
       },
      handleClose(done){
       done()
      },
      logins(){
        let self=this;
       this.dialogVisible=false;
       var username=this.userName;
       var params='?userName='+username
          +'&password='+this.password;
           axios.post('/login/login'+params).
           then(function(res){
              if(res.data.ret==0)
              {
                  setCookies('access_token',res.data.msg,0.0209)
                  setCookies('username',username,2*365)
                  self.$store.commit('SET_ACCESS_TOKEN',res.data.msg)
                  window.location.reload()
              }
              else{
               self.$alert("网络异常，请重试", '登录', 
                 {confirmButtonText: '确定'}       
                 )
              }
           })
      }
     }
     }
</script>
<style>
  @import '../../public/css/bootsrap/dist/css/bootstrap.css';
</style>