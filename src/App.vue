<template>
  <div id="app" class='content'>
    <div class="container-fluid" style='padding:0px'>
      <div class="row" style='padding:30px'>
        <div class="col col-md-2">
        </div>
        <div class="col col-md-8">
          <div class="row">
            <div class="col col-md-3">
              <div class="row">
                <div class="col col-md-12">
                  <img src="../public/logo.png" alt="">
                </div>
              </div>
            </div>
            <div class="col col-md-6">
            </div>
            <div class="col col-md-3">
  
            </div>
          </div>
        </div>
        <div class="col col-md-2">
  
        </div>
      </div>
      <div class="row">
        <!-- 导航-->
        <div class="col col-md-2">
        </div>
        <div class="col col-md-8">
          <nav class="inner">
            <el-menu :default-active="activeIndex" class="el-menu-def" mode="horizontal" @select="handleSelect">
              <el-submenu index="1">
                <template slot="title">影视植入资源
</template>
             <el-menu-item index="1-1">电视剧</el-menu-item>
            <el-menu-item index="1-2">电影</el-menu-item>
             <el-menu-item index="1-3">综艺</el-menu-item>
            <el-menu-item index="1-4">网络类型</el-menu-item>
          </el-submenu>
        <el-menu-item index="2">首页</el-menu-item>
        <el-menu-item index="3">案例咨询</el-menu-item>
       <el-menu-item index="4">技术支持</el-menu-item>
      <el-menu-item index="5">关于我们</el-menu-item>
      <el-menu-item index="6">加入我们</el-menu-item>
    </el-menu>
      <div class="line"></div>
      </nav>
    </div>
     <div class="col col-md-2">
    </div>
    </div>
    <section> 
    <img style="width:100%;height:300px" src='../public/banner.png' alt="">
    </section>
</div>
      <router-view class="view"></router-view>
       </div>
  
</template>


<script>
  import lister from './components/lister.vue'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  @import '../node_modules/element-ui/lib/theme-default/index.css';
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
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
  
  .inner {
    text-align: center;
    width: 100%;
  }
  
  .views {
    padding: 0px
  }
</style>
