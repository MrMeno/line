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
              <el-input placeholder="请输入内容" id='search' @focus='changeLength()' @blur='initWidth()' class='search'>
                 <el-button class='btn_search'  @click="dataDeemo('','')" slot="append" icon="search"></el-button>
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
           <div class="row" @mouseover="showDiv('1')" @mouseout="hideDiv()" >
             <div class="col col-md-4 text-right">  
              <i class="fa fa-television" aria-hidden="true"></i>
             </div>
             <div class="col col-md-4"> 
            <span class="space" @click="changeType(1)">
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
             <div class="row" @mouseover="showDiv('2')" @mouseout="hideDiv()">
             <div class="col col-md-4 text-right">  
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
             </div>
             <div class="col col-md-4"> 
              <span class="space" @click="changeType(2)">
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
             <div class="row" @mouseover="showDiv('3')" @mouseout="hideDiv()">
             <div class="col col-md-4 text-right">  
              <i class="fa fa-tachometer" aria-hidden="true"></i>
             </div>
             <div class="col col-md-4"> 
              <span class="space" @click="changeType(3)">
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
                <div class="row" @mouseover="showDiv('4')" @mouseout="hideDiv()">
             <div class="col col-md-4 text-right">  
              <i class="fa fa-internet-explorer" aria-hidden="true"></i>
             </div>
             <div class="col col-md-4"> 
              <span class="space" @click="changeType(4)">
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
        <el-menu-item index="2"><router-link to="/main">首页</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/detail">案例咨询</router-link></el-menu-item>
        <el-menu-item index="4">技术支持</el-menu-item>
        <el-menu-item index="5">关于我们</el-menu-item>
        <el-menu-item index="6">加入我们</el-menu-item>
    </el-menu>
      <div class="line"></div>
      <div class="area" style='display:none' @mouseover="showDiv('1')" @mouseout="hideDiv()">
        <div class="container" style='padding-top:20px'>
        <div class="row" style='font-size:13px'><!--first line -s-->
        <div class="col col-md-1" style='margin-top:6px;'>
        类型
        </div>
        <div class="col col-md-11">
        <div class="row">
        <div class="col col-md-1" style='margin-top:6px;color:#666;'>
        全部
        </div>
        <div class="col col-md-1" v-for='data in type_data' style='margin-top:6px;color:#333;border-left:solid 1px #ddd'>
          {{data.name}}
        </div>
        </div>
        </div>
        </div><!--first line -e-->

       <div class="row" style='font-size:13px;padding-top:10px'><!--sec line -s-->
        <div class="col col-md-1" style='margin-top:6px;'>
        演员
        </div>
        <div class="col col-md-11">
        <div class="row text-center">
        <div class="col col-md-1" style='margin-top:6px;color:#666'>
        全部 
        </div>
        <div class="col col-md-1" v-for='data in dis_data.actor' style='margin-top:6px;color:#333;color:#333;border-left:solid 1px #ddd'>
         <span class='text-line'>{{data.displayName}}
          </span>
        </div>
        </div>
        </div>
        </div><!--sec line -e-->

         <div class="row" style='font-size:13px;padding-top:10px'><!--3td line -s-->
        <div class="col col-md-1" style='margin-top:6px;'>
        导演
        </div>
        <div class="col col-md-11">
        <div class="row text-center">
        <div class="col col-md-1" style='margin-top:6px;color:#666'>
        全部
        </div>
        <div class="col col-md-1" v-for='data in dis_data.director' style='margin-top:6px;color:#333;border-left:solid 1px #ddd'>
         <span class='text-line'>{{data.displayName}}
          </span>
        </div>
        </div>
        </div>
        </div><!--3td line -e-->

        <div class="row" style='font-size:13px;padding-top:10px'><!--3td line -s-->
         <div class="col col-md-1" style='margin-top:6px;'>
         编剧
        </div>
        <div class="col col-md-11">
        <div class="row text-center">
        <div class="col col-md-1" style='margin-top:6px;color:#666'>
        全部
        </div>
        <div class="col col-md-1" v-for='data in dis_data.swriter' style='margin-top:6px;color:#333;border-left:solid 1px #ddd'>
         <span class='text-line'>{{data.displayName}}
          </span>
        </div>
        </div>
        </div>
        </div><!--3td line -e-->
        </div>
      </div>
      </nav>
    </div>
     <div class="col col-md-1">
    </div>
    </div>
     </div>
      <router-view class="view"></router-view>
     <div class="row"  style='padding-top:30px'>          
      <footers ></footers>
     </div>
  </div>
</template>


<script>
  import {animate} from './directives/methods'
  import $ from 'jquery'
  import footers from './components/footer.vue'
  export default {
    mounted(){
     this.tv_data.actor=this.dataDeemo('1','1');
     this.tv_data.director=this.dataDeemo('1','2');
     this.tv_data.swriter=this.dataDeemo('1','3');
     this.film_data.actor=this.dataDeemo('2','1');
     this.film_data.director=this.dataDeemo('2','2');
     this.film_data.swriter=this.dataDeemo('2','3');
     this.zy_data.actor=this.dataDeemo('3','1');
     this.zy_data.director=this.dataDeemo('3','2');
     this.zy_data.swriter=this.dataDeemo('3','3'); 
     this.net_data.actor=this.dataDeemo('4','1');
     this.net_data.director=this.dataDeemo('4','2');
     this.net_data.swriter=this.dataDeemo('4','3'); 
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        tv_data:[],
        film_data:[],
        zy_data:[],
        net_data:[],
        dis_data:[],
        type_data:[]
      };
    },
    components:{
      footers
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
      changeType(type){
         
      },
      dataDeemo(type,staffType){//通用搜索框接口
        var datas=[];
        type = (type!='')?type:'1';
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
                    datas = resquet.data;
                } else {
             console.log('error')
                }
            }
        });
        return datas;
      },
      getType(type){//通用搜索框接口
        var datas;
               $.ajax({
            type: "GET",
            url: "/home/type_lists",
            dataType: "json",
            async: false,
            data:{
              type:type
            },
            success: function(resquet) {
                if (resquet != null) {
                    datas = resquet.data;
                } else {
             console.log('error')
                }
            }
        });
        return datas;
      },
      showDiv(e){//移入移出事件
      this.type_data=this.getType(e);
        if(e=='1'){
           this.dis_data=this.tv_data;
          this.showThis();    
        }
        else if(e=='2'){
            this.dis_data=this.film_data;
             this.showThis();
        } else if(e=='3'){
            this.dis_data=this.zy_data;
              this.showThis();
        }else if(e=='4'){
            this.dis_data=this.net_data;

             this.showThis();
        }
      },
      showThis(){
       $(".area").stop().fadeTo("slow",1,function(){
            $(this).css("display", "block");
        })
      },
      hideDiv(){
         $(".area").stop().fadeTo("slow",0,function(){
            $(this).css("display", "none");
        })
      }
    }
  }
</script>

<style>
  @import '../public/css/element-ui/lib/theme-default/index.css';
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
  .text-line{
     word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;/*clip */
  }
  .child-item {
    text-align: center!important;
    width: 100%!important;
    height:80px!important;
    line-height: 50px!important;
    padding: 10px 0px!important;
    background-color: #666!important;
    color:white;
    border-bottom: solid 1px #777!important;

  }
  .child-item{
    color:white
  }
    .child-item:hover{
      color:#666!important;
      background-color: white!important;
    }
    .area{
      width:82.33%;
      height:290px;
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
