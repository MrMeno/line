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
            <menuList></menuList>
          </div>
        </div>
        <div class="col col-md-1">
        </div>
       </div>
      <main-nav></main-nav>
     </div>
      <breadcrumb></breadcrumb>
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
  import menuList from './components/menuList.vue'
  import breadcrumb from './components/breadcrumb.vue'
  import mainNav from './components/mainNav.vue'
  export default {
    mounted(){
     
    },
    created(){
// console.log(this.$router.history.current.fullPath)
    },
    data() {
      return {
        tv_data:[],
        film_data:[],
        zy_data:[],
        net_data:[]
      };
    },
    components:{
      footers,menuList,breadcrumb,mainNav
    },
    methods: {
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
    padding: 0px;
    background-color:#eee
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
