<template>
<div>
	
		<div class="row" style='padding-top:50px' v-if="vShowList[1]">
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
<div class="row" style='padding-top:50px' v-if="vShowList[2]">
aaaa
</div>
<div class="row" style='padding-top:50px' v-if="vShowList[3]">
bbbb
</div>
<div class="row" style='padding-top:50px' v-if="vShowList[4]">
ccc
</div>
<div class="row" style='padding-top:50px' v-if="vShowList[5]">
ddd
</div>

</div>	

</template>
<script>
	
	export default{
  name: 'ads-module',
  props: ['isShow','showList','active'],
  mounted(){
 
  },
  data () {
    return {
    vShowList:this.showList,
        phone:'',
    	msg:'',
      secNum:'',
      repNum:'',
      checked:false
    }
  },
  computed: {
  },
  methods: {
  	 
    
  }
	}
</script>