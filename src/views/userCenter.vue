<template>
<div class="container-fluid" style='padding-top:30px;min-height:600px'>
<div class="row text-center">
<div class="col col-md-2 col-md-offset-1" style='background-color:white'>
  <div class="row" style='font-size:13px;color:#666;padding-bottom:20px'>
    <div class="col col-md-12">
      <div class="row">
        <div class="col col-md-12">
          <img src="../../public/logo-120.png" alt="">
        </div>
      </div>
      <div class="row" style='padding:5px 0px'>
        <div class="col col-md-6 text-right">
          账户安全:
        </div>
         <div class="col col-md-6 text-left">
          低
        </div>
      </div>
       <div class="row" style='padding:5px 0px'>
        <div class="col col-md-6 text-right">
          {{username}}
        </div>
      </div>
       <div class="row" style='padding:5px 0px'>
        <div class="col col-md-6 text-right">
          邮箱未绑定
        </div>
        <div class="col col-md-6 text-left">
          去绑定
        </div>
      </div>
 <!--      <div class="row" style='padding:10px 0px'>
        <div class="col col-md-12">
          邮箱已绑定
        </div>
      </div> -->
    <div class="row">
      <div class="col col-md-12">
    
      </div>
    </div>
    </div>
  </div>
	<div class="row" style='border-top:dashed 1px #eee;padding:20px'>
   <div class="col col-md-12">
     <el-tree :data="listdata" :render-content="showNode"  default-expand-all
     :expand-on-click-node="true" :props="defaultProps" @node-click="handleNodeClick">
    </el-tree>
   </div> 
  </div>
</div>
<div class="col col-md-1"></div>
<div class="col col-md-7" style='background-color:white;'>
	<router-view></router-view>
</div>
</div>
</div>
</template>
<script>
import {getCookies} from "../directives/methods"
	export default{
    mounted(){
      this.username=getCookies('username');
    },
		data(){
			 return {
        listdata: [{
          label: "个人信息",
          children: [{
          	 url:"/userCenter/info",
            label: '我的资料'
          }]
        }, {
          label: '产品管理',
          children: [{
          	 url:"/userCenter/pubMedia",
            label: '发布媒体'
          }, {
          	 url:"/userCenter/info",
            label: '产品列表'
          }]
          }, {
          label: '入驻管理',
          children: [{
          	 url:"/userCenter/info",
            label: '媒体主申请'
          }, {
          	 url:"/userCenter/info",
            label: '代理商申请'
          }, {
          	 url:"/userCenter/info",
            label: '审核进度'
          }]
        }, {
          label: '设置',
          children: [{
          	 url:"/userCenter/info",
            label: '安全中心'
          }]
        }],
        username:'',
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
	},
	  methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      showNode(h, {node,data,store}){
      	// console.log(node)
           if(node.data.url==undefined)
           {
             return (
              <label class="nodes">{node.label}</label>
              )
           }
      	     else
             {
              return (
              <a href={node.data.url}>{node.label}</a>
              )
             }
      }
    }
		
	}
</script>
<style>
  .nodes{
    font-size: 15px;
    font-weight: 500
  }
</style>