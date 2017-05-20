<template>
<div class="container">
<div class="row text-center">
<div class="col col-md-2"></div>
<div class="col col-md-8">
<el-steps :space='250' :active="1"  finish-status="success">
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
<div class="row">
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
<div class="row" style='padding-top:50px'>
	<div class="col col-md-12">
		<div class="row">
			<div class="col col-md-4 text-right" style='line-height:30px'>
				手机号码
			</div>
			<div class="col col-md-4 text-left">
				<el-input v-model="phone"  placeholder="请输入手机号" style='width:100%'></el-input>
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
				<el-button  type='button'>获取验证码</el-button >
			</div>

		</div>
	</div>

</div>

</div>
</template>
<script>
  import $ from 'jquery'
export default {
  mounted(){
      $('.tabs').click(function(){
      	   $(this).toggleClass('back-change');
      })
  },
 ready(){

    },
  data(){
    return {
    	phone:'',
    	msg:''

    }
  },
  computed: {

  },
  components:{

  },
  methods: {
 
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