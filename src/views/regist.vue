<template>
<div class="container" style='min-height:600px'>
<div class="row text-center">
<div class="col col-md-2"></div>
<div class="col col-md-8">
<el-steps :space='250' :active="active"  finish-status="success" v-if="showList[0]">
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
<div class="row" v-if='sTab'>
<div class="col col-md-6 text-center">
<div class="tabs" style='float:right'>
广告主
</div>

</div>
<div class="col col-md-6 text-center">
<div class="tabs" style='float:left'>
媒体主
</div>

</div>
</div>
</div>
<div class="col col-md-2"></div>
</div>
    <div class="row" style='padding-top:50px' v-if="showList[1]">
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
        <el-input v-model="email"  placeholder="请填写邮箱" style='width:100%'></el-input>
      </div>
    </div>
    <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        短信验证码
      </div>
      <div class="col col-md-3 text-left">
        <el-input v-model="msg" placeholder="验证码是六位数"></el-input>
      </div>

      <div class="col col-md-1 text-left">
        <el-button  type='button' @click='captcha()'>获取验证码</el-button >
      </div>

    </div>

    <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        密码
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="secNum"  placeholder="请输入密码" style='width:100%'></el-input>
      </div>
    </div>

     <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        重复密码
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="repNum"  placeholder="请重复密码" style='width:100%'></el-input>
      </div>
    </div>

    <div class="row" style='padding-top:20px'>
       <el-checkbox v-model="checked">我已阅读并接受</el-checkbox><span style='color:#e40012;cursor:pointer'>《媒大媒小服务条款》</span>
      
    </div>
  </div>
</div>
<div class="row" style='padding-top:50px' v-if="showList[2]">
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
        职位
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="position"  placeholder="请填写职位" style='width:100%'></el-input>
      </div>
    </div>
     <div class="row" style='padding-top:20px'>
      <div class="col col-md-4 text-right" style='line-height:30px'>
        联系电话
      </div>
      <div class="col col-md-4 text-left">
        <el-input v-model="telephone"  placeholder="请填写电话" style='width:100%'></el-input>
      </div>
    </div>
  
</div>
<div class="row" style='padding-top:50px' v-if="showList[3]">
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
          <el-select v-model="value" placeholder="公司所属行业" style='width:100%'>
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
<div class="row" style='padding-top:50px' v-if="showList[4]">
<div class="col col-md-12" >
  <div class="row">
    <i class="el-icon-check" style='color:#7fc334'></i>感谢您注册成为媒大媒小用户！
  </div>
   <div class="row" style='padding-top:30px'>
    我们向您注册邮箱发送了一份验证邮件，请登录您的邮箱{{email}} 查收
  </div>
</div>
</div>

<div class="row" style='padding-top:30px'>
  <div class="col col-md-3">
    
  </div>
  <div class="col col-md-6">
    
  </div>
  <div class="col col-md-3">
    
  </div>
</div>

<div class="row text-center" style='padding-top:20px'>
      <el-button type='danger' @click="next()" v-if='sBtn'>下一步</el-button>
    </div>
</div>


</template>
<script>
  // import $ from 'jquery'
  import axios from 'axios'
export default {
  mounted(){
      // $('.tabs').click(function(){
      // 	   $(this).toggleClass('back-change');
      // })
  },
 ready(){

    },
  data(){
    return {
      userType:'1',
      active:1,
      sTab:true,//广告主选项
      sBtn:true,
      userName:'',
      telephone:'',
      msg:'',
      secNum:'',
      repNum:'',
      checked:false,
      name:'',
      email:'',
      position:'',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        vTrade:'',
      showList:[true,true,false,false,false]
    }
  },
  computed: {

  },
  components:{
  },
  methods: {
       next(){
           if(this.active==1){
                this.sTab=false;
                this.regist()
            }
          if(this.active<4)
          {
            this.showList[this.active]=false;
            this.showList[this.active+1]=true;
            if(this.active==2)
            {
              var data={}
              this.save(data)
            }
            else if(this.active==3){
               var data={}
              this.save(data)
            }
          }
         else if(this.active==4)
          {

            this.showList[0]=false;
            this.showList[4]=false;
            this.showList[5]=true
          };
            this.active+=1;
            if (this.active > 3)
            {
               this.active=4;
               this.sBtn=false;
              this.showList[0]=false;
           };
    },
    regist(){
      let self=this;
      axios.post('login/regist',{
        userName:self.userName,
        type:1,
        password:self.password,
        email:self.email
           })
            .then(function(response){
            console.log(response);
            });
    },
    save(data){
       let self=this;
      axios.post('login/save',data)
            .then(function(response){
            console.log(response);
            });
    },
    captcha(){
      let self=this;
      axios.post('login/captcha?userName='+self.userName+'&type='+self.type)
            .then(function(response){
            console.log(response);
            });
            
    }

  }
}
</script>
<style>
    .tabs{
      background-color:#e40011;
      color:white;
      width:80%;
      height:100px;
      line-height: 100px;
      font-size: 16px
    }
    .back-change{
    	background-color:#d0d0d0;
    }
</style>