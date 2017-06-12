<template>
<div class="container" style='min-height:600px;background-color:white;padding:50px 0px'>
<div class="row text-center">
<div class="col col-md-2"></div>
<div class="col col-md-8">
<el-steps :space='250' :active="active"  finish-status="success" v-if="active!=4">
  <el-step title="创建账户"></el-step>
  <el-step title="填写个人资料"></el-step>
  <el-step title="实名认证"></el-step>
  <el-step title="完成"></el-step>
</el-steps>
</div>
<div class="col col-md-2"></div>
</div>

<div class="row" style='padding-top:30px'>
<div class="col col-md-2"></div>
<div class="col col-md-8">
<div class="row" v-if='active==1'>
<div class="col col-md-6 text-center" v-cloak>
<div v-bind:class="{a_class:b_class,b_class:a_class}" style='float:right' @click='changeType(1)' >
广告主
</div>

</div>
<div class="col col-md-6 text-center" v-cloak>
<div v-bind:class="{a_class:a_class,b_class:b_class}" style='float:left'  @click='changeType(2)'>
媒体主
</div>

</div>
</div>
</div>
<div class="col col-md-2"></div>
</div>
    <div class="row" style='padding-top:50px' v-if="active==1" v-cloak>
  <div class="col col-md-12">
    <div class="row">
      <div class="col col-md-4 text-right" style='line-height:30px'>
        手机号码
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="userName"  placeholder="请输入手机号" style='width:100%'></el-input>
      </div>

    </div>

      <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        邮箱
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="email"  placeholder="请填写邮箱" type='email' style='width:100%'></el-input>
      </div>
    </div>
    <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        短信验证码
      </div>
      <div class="col col-md-3 text-left">
        <el-input v-model="msg" placeholder="验证码是四位数"></el-input>
      </div>

      <div class="col col-md-1 text-left">
        <el-button v-if='counter'  type='button' @click='captcha()'>获取验证码</el-button >
        <el-button v-if='!counter' :disabled="true"  type='button'>倒计时{{timer}}s</el-button >
      </div>

    </div>

    <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        密码
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="secNum"  placeholder="请输入密码" type='password' style='width:100%'></el-input>
      </div>
    </div>

     <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        重复密码
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="repNum"  placeholder="请重复密码" type='password' style='width:100%'></el-input>
      </div>
    </div>

    <div class="row" style='padding-top:20px'>
       <el-checkbox v-model="checked" @click='onCheck()'>我已阅读并接受</el-checkbox><span style='color:#e40012;cursor:pointer'>《媒大媒小服务条款》</span>
      
    </div>
  </div>
</div>
<div class="row" style='padding-top:50px' v-else-if="active==2">
 <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        姓名
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="name"  placeholder="请填写姓名" style='width:100%'></el-input>
      </div>
    </div>

       <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        昵称
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="nickName"  placeholder="请填写昵称" style='width:100%'></el-input>
      </div>
    </div>
     <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        职位
      </div>
      <div class="col col-md-2 text-left">
        <el-select v-model="selectJob" placeholder="请选择职位" style='width:100%'>
        <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
      </div>
      <div class="col col-md-2">
           <el-select v-model="selectJob" placeholder="请选择职位" style='width:100%'>
        <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
      </div>
    </div>
  
</div>
<div class="row" style='padding-top:50px' v-else-if="active==3">
<div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        企业名称
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="firm_name"  placeholder="请填写公司名称" style='width:100%'></el-input>
      </div>
    </div>

    <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        所属行业
      </div>
      <div class="col col-md-4 text-left">
          <el-select v-model="category" placeholder="公司所属行业" style='width:100%'>
        <el-option
      v-for="item in jobOption"
      :key="item.id"
      :label="item.nameCn"
      :value="item.id">
    </el-option>
    </el-select>
      </div>
    </div>
</div>
<div class="row" style='padding-top:50px' v-else-if="active==4">
<div class="col col-md-12" >
  <div class="row" style='color:#7fc334;font-size:18px'>
    <i class="el-icon-check" style='color:#7fc334;font-size:17px'></i>感谢您注册成为媒大媒小用户！
  </div>
   <div class="row" style='padding-top:30px;color:#666'>
    我们向您注册邮箱发送了一份验证邮件，请登录您的邮箱 <span style='color:#8db3d8'>{{email}}</span> 查收
  </div>
</div>

<div class="row" style='padding-top:100px'>
  <div class="col col-md-3">
  </div>
  <div class="col col-md-6">
    <div class='contas'>
        <p style='padding-top:30px'> 资料认证审核提交成功。预计一个工作日内审核完毕</p>
        <p>审核结果会短信通知到您的注册手机上！</p>
    </div>
  </div>
  <div class="col col-md-3">
    
  </div>
</div>

<div class="row" style='padding-top:30px'>
  <div class="col col-md-12">
    <el-button type='danger'><router-link to='/main' style='color:white'>返回首页</router-link></el-button>
  </div>
</div>
</div>



<div class="row text-center" style='padding-top:20px'>
      <el-button type='danger' @click="next()" v-if='active!=4'>下一步</el-button>
    </div>
</div>


</template>
<script>
   import $ from 'jquery'
  import axios from 'axios'
  import {checks} from '../directives/methods'
  import {setCookies} from '../directives/methods'
  import {getCookies} from '../directives/methods'
  export default {
  mounted(){
  this.active=this.getActive();
  console.log(this.active);
  this.catchJob();
  this.catchIndu();
  console.log(this.jobOption)
  },
  created(){
  },
 ready(){

    },
  data(){
    return {
      userType:1,
      active:1,
      userName:'',
      telephone:'',
      a_class:true,
      b_class:false,
      msg:'',
      c_msg:'',
      secNum:'',
      repNum:'',
      checked:false,
      firm_name:'',
      name:'',
      email:'',
      nickName:'',
      position:'',
      counter:true,
      timer:60,
      jobOption:[],
      selectJob:'',
      options: [],
        vTrade:'',
        category:'',
    }
  },
  computed: {

  },
  components:{
  },
  methods: {
       next(){
         let self=this;
         var rules=self.registCheck();
         // if(self.checked)
         // {
           if(this.active==1){
                if(self.checked)
                {
                if(rules.r)//输入验证满足为true
                { 
                  self.regist();//执行登录方法并返回登录状态
                 
                }
                else{
                    self.$alert(rules.t, '提示', {
                  confirmButtonText: '确定'
                });
               return 
                }
              }
              else{
                     self.$alert('您还未同意服务条款', '提示', {
               confirmButtonText: '确定'
             })
                  return
              }

            }
          if(this.active<4)
          {
            if(this.active==2)
            {
              this.save()
              setCookies("status_"+getCookies('username'),'3',365*2);
             
            }
            else if(this.active==3){
              this.save()
              setCookies("status_"+getCookies('username'),'4',365*2);
            }
          }
             this.active+=1;
            if (this.active > 3)
            {
               this.active=4;
               this.sBtn=false;
           };
         // }
         // else{
         //   self.$alert('您还未同意服务条款', '提示', {
         //       confirmButtonText: '确定'
         // })
         // }
       },
       onCheck(){
        this.checked=!this.checked;
       },
      getActive(){
        var status=getCookies('status_'+getCookies('username'));
        var token=getCookies('access_token');
        var actives=1;
        if(status!=undefined&&token!=undefined)
        {
          actives=status;
          return Number(actives)
        }
        else{
          return 1
        }
      },
    registCheck(){
      var datas={
        userName:this.userName,
        email:this.email,
        msg:this.msg,
        c_msg:this.c_msg,
        secNum:this.secNum,
        repNum:this.repNum
        };
        return checks(datas);
    },

    regist(){
      let self=this;
      var params='?userName='+self.userName;
      params+='&type='+self.userType+
      '&password='+self.secNum+
      '&repeatPasswd='+self.repNum+
      '&email='+self.email+

      '&verification='+self.msg;
      axios.post('login/regist'+params)
            .then(function(response){
            if(response.data.ret==0){
              self.$store.commit('SET_ACCESS_TOKEN',response.data.msg);
              setCookies('access_token',response.data.msg,0.0209);
              setCookies('username',self.userName,2);
               setCookies("status_"+self.userName,'2',365*2);
              self.$alert('恭喜您已成功注册媒大媒小系统，请完善个人信息', '提示', {
               confirmButtonText: '确定',
               callback:function(){
                    self.$store.commit('SET_LOGIN_STATE',true);
                    window.location.reload();
               }});
            }
            else{
                self.$alert(response.data.msg, '提示', {
               confirmButtonText: '确定'});
            }
       });           
    },
    changeType(e){
      this.userType=e;
      if(e==1){
        this.a_class=true;
        this.b_class=false;
      }
      else{
         this.a_class=false;
        this.b_class=true;
      }

    },
    catchJob(){
      let self=this;
       axios.get('login/job').then(function(req){
       if(req.data.ret==0){
            self.jobOption=req.data.data;
       }
       else
       {
      self.$alert(response.data.msg, '提示', {
               confirmButtonText: '确定'});
       }
       })
    },
     catchIndu(){
      let self=this;
       axios.get('login/industry').then(function(req){
           if(req.data.ret==0){
     self.indption=req.data.data;
       }
       else
       {
      self.$alert(response.data.msg, '提示', {
               confirmButtonText: '确定'});
       }
       })
    },
    timeCount(){
      let self=this;
      setInterval(function(){
        if(self.timer>0){
          return self.timer--
        }
        else{
          self.counter=true;
          self.timer=60;
        }
      },1000)
    },
    save(){
       let self=this;
       var params='';
       if(self.active==2)
       {
        params='?nickName='+self.nickName;
       params+='&position='+self.position
       +'&step=2'
       +'&name='+self.name
       +'&access_token='+getCookies('access_token');
     }
     else if(self.active==3)
      {
       params='?company='+self.firm_name+
           '&step=3'+
           '&category='+self.category+
            '&access_token='+getCookies('access_token');
       }
      axios.post('login/save'+params)
            .then(function(response){
            if(response.data.ret==0){
               setCookies("status",getCookies('username')+'_'+self.active,365*2);
                 self.$alert(response.data.msg, '提示', {
              confirmButtonText: '确定'
           });
            }
            });
    },
    captcha(){
      let self=this;
      if(self.userName==''){
          this.$alert('请填写手机号', '提示', {
          confirmButtonText: '确定'
        });
      }
      else{
      axios.post('login/captcha?userName='+self.userName+'&type='+self.userType)
            .then(function(response){
            console.log(response.data);
            if(response.data.ret==0){
                   self.c_msg=response.data.msg;
                   self.counter=false;     //发送短信成功
                   self.timeCount();
            }
            else{
                 self.$alert(response.data.msg, '提示', {
          confirmButtonText: '确定'
        });
            }
            });
      }
            
    }

  }
}
</script>
<style>
    .a_class{
      background-color:#d0d0d0;
      color:white;
      width:80%;
      height:100px;
      line-height: 100px;
      font-size: 16px
    }
    .b_class{
       background-color:#e40011;
      color:white;
      width:80%;
      height:100px;
      line-height: 100px;
      font-size: 16px
    }
    [v-cloak] {
  display: none;
}
.contas{
  width:100%;
  height:150px;
  line-height: 30px;
  border:dashed 1px #aaa;
}
</style>