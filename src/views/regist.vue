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
<ad-module :isShow='isShow' :showList='showList' :active='active'></ad-module>
<div class="row text-center" style='padding-top:20px'>
      <el-button type='danger' @click="next()">下一步</el-button>
    </div>
</div>
</template>
<script>
  import $ from 'jquery'
  import adModule from '../components/login/ads.vue'
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
      active:1,
      isShow:'',
      showList:[true,true,false,false,false,false]

    }
  },
  computed: {

  },
  components:{
adModule
  },
  methods: {
       next(){
          if(this.active<4)
          {
            this.showList[this.active]=false;
            this.showList[this.active+1]=true;
          }
        else if(this.active==4)
          {
            this.showList[0]=false;
            this.showList[4]=false;
            this.showList[5]=true
          }
            if (this.active++ > 4)
             {
              this.active = 1
              this.showList[0]=true;
             };
            console.log(this.active)

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