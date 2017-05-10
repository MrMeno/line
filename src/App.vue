<template>
  <div id="app" class='content'>
    <div class="container-fluid" style='padding:0px'>
      <div class="row" style='padding:10px'>
        <div class="col col-md-1">
        </div>
        <div class="col col-md-10">
          <div class="row">
            <div class="col col-md-3">
              <div class="row">
                <div class="col col-md-12">
                  <img src="../public/img/logo.png" alt=""/>
                </div>
              </div>
            </div>
            <div class="col col-md-6">
              <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容" id='search' v-model="input" @focus='changeLength()' @blur='initWidth()' class='search'>
                 <el-button class='btn_search'  @click='dataDeemo()' slot="append" icon="search"></el-button>
              </el-input>
            </div>
            </div>
            <div class="col col-md-3">
                <el-dropdown style='padding-top:30px'>
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
                <span class='space'>个人中心</span>
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
            </div>
          </div>
        </div>
        <div class="col col-md-1">
  
        </div>
       </div>
      <div class="row">
        <!-- 导航-->
        <div class="col col-md-1">
        </div>
        <div class="col col-md-10">
          <nav class="inner">
            <el-menu :default-active="activeIndex" class="el-menu-def" mode="horizontal" @select="handleSelect">
              <el-submenu index="1" class='parent-items'>
                <template slot="title">
                <i class="fa fa-list" aria-hidden="true"></i>
                <span class='space'>影视植入资源</span>
              </template>
             <el-menu-item class='child-item' index="1-1" >
           <div class="row"  >
             <div class="col col-md-4 text-right">  
              <i class="fa fa-television" aria-hidden="true"></i>
             </div>
             <div class="col col-md-4"> 
              <span class="space"  @mouseover="popoverDiv('0')" @mouseout="popoverDiv('0')">
               电视剧
             </span>
           </div>
             <div class="col col-md-4 text-center">
              <i class="fa fa-angle-right" aria-hidden="true">  
              </i>
            </div>
           </div>
           </el-menu-item>
            <el-menu-item class='child-item' index="1-2">
             <div class="row">
             <div class="col col-md-4 text-right">  
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
             </div>
             <div class="col col-md-4"> 
              <span class="space">
               电影
             </span>
           </div>
             <div class="col col-md-4 text-center">
              <i class="fa fa-angle-right" aria-hidden="true">            
              </i>
            </div>
           </div>
          </el-menu-item>
             <el-menu-item class='child-item' index="1-3">
             <div class="row">
             <div class="col col-md-4 text-right">  
              <i class="fa fa-tachometer" aria-hidden="true"></i>
             </div>
             <div class="col col-md-4"> 
              <span class="space">
               综艺
             </span>
           </div>
             <div class="col col-md-4 text-center">
              <i class="fa fa-angle-right" aria-hidden="true">               
              </i>
            </div>
           </div>
           </el-menu-item>
            <el-menu-item class='child-item' index="1-4">
                <div class="row">
             <div class="col col-md-4 text-right">  
              <i class="fa fa-internet-explorer" aria-hidden="true"></i>
             </div>
             <div class="col col-md-4"> 
              <span class="space">
               网络类型
             </span>
           </div>
             <div class="col col-md-4 text-center">
              <i class="fa fa-angle-right" aria-hidden="true">               
              </i>
            </div>
           </div>
          </el-menu-item>
          </el-submenu>
        <el-menu-item index="2">首页</el-menu-item>
        <el-menu-item index="3">案例咨询</el-menu-item>
        <el-menu-item index="4">技术支持</el-menu-item>
        <el-menu-item index="5">关于我们</el-menu-item>
        <el-menu-item index="6">加入我们</el-menu-item>
    </el-menu>
      <div class="line"></div>
      <div class="area_tv hide">
        
      </div>
      </nav>
    </div>
     <div class="col col-md-1">
    </div>
    </div>
  <!--  <section> 
    <img style="width:100%;height:300px" src='../public/img/banner.png' alt="">
    </section> -->
     </div>
      <router-view class="view"></router-view>
  </div>
</template>


<script>
  import {animate} from './directives/methods'
  import $ from 'jquery'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input:'',
        demo:[]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
     changeLength(e){
       var inputs=document.getElementById('search');
           animate(inputs, {width: 400},2, 0.01, function(){
                animate(inputs, {width: 500},0.1, 0.01);
         });
      },
      initWidth(){
           var inputs=document.getElementById('search');
           animate(inputs, {width: 500},2, 0.01, function(){
                animate(inputs, {width: 400},0.1, 0.01);
         });
      },
      dataDeemo(){
        var type='3';
        var staffType='1';
           $.ajax({
            type: "GET",
            url: "/home/lists",
            dataType: "json",
            async: false,
            data:{
              type:type,
            staffType:staffType
            },
            success: function(resquet) {
                if (resquet != null) {
                    this.demo = resquet;
                    console.log(this.demo);
                } else {
             console.log('error')
                }
            }
        });
      },
      popoverDiv(e){
        if(e=='0'){
          $('.area_tv').toggleClass('hide');
        }

      }
    }
  }
</script>

<style>
  @import '../node_modules/element-ui/lib/theme-default/index.css';
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/font-awesome/css/font-awesome.css';

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Microsoft YaHei", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
    background-color: white;
    margin: 0;
    padding-top: 0px;
    color: #34495e;
    overflow-y: scroll;
  }
  
  .content {
    text-align: center
  }
  .space{
    padding: 10px
  }
  .inner {
    text-align: center;
    width: 100%;
  }
  
  .views {
    padding: 0px
  }
  .parent-items ul{
    border-radius:0px!important;
    margin:0px!important;
    padding: 0px!important;
    border:solid 0px white!important;
    top:60px!important;
     
  }
  .child-item {
    text-align: center!important;
    width: 100%!important;
    height:75.5px!important;
    line-height: 50px!important;
    padding: 10px 0px!important;
    background-color: #666!important;
    color:white;
    border-bottom: solid 1px #777!important;

  }
    .child-item:hover{
      color:#666!important;
      background-color: white!important;
    }
    .area_tv{
      width:82.33%;
      height:270px;
      background-color:white;
      z-index:1;
      position:absolute;
      left:16.66%
    }
    .search{
    border:solid 1px black;
    border-radius:0px;
    width:400px;
    margin-top:5px
    }
    .btn_search{
      background-color:black!important;
      border-radius:0px;
      border:solid 1px black;
      width:100px
    }

</style>
