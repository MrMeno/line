<template>
  <div id="app">
    <header class="header">
      <div>

      </div>
      <nav class="inner">
        <ul class='nav_list'>
          <li class='list_back'>
            <lister></lister>
          </li>
          <li>
            <router-link to="/top">首页</router-link>
          </li>
          <li>
            <router-link to="/new">案例咨询</router-link>
          </li>
          <li>
            <router-link to="/show">技术支持</router-link>
          </li>
          <li>
            <router-link to="/ask">关于我们</router-link>
          </li>
          <li>
            <router-link to="/job">加入我们</router-link>
          </li>
          <li>
            <router-link to="/zr">逗你玩</router-link>
          </li>
        </ul>
      </nav>
    </header>

      <router-view class="view"></router-view>
  </div>
</template>


<script>
  import lister from './components/lister.vue'
  export default {
    components: {
      lister
    },
    data() {
      return {
      }
    }
  }
</script>
<style>
@import '../node_modules/element-ui/lib/theme-default/index.css';
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
    background-color: #f2f3f5;
    margin: 0;
    padding-top: 55px;
    color: #34495e;
    overflow-y: scroll;
  }
  
  a {
    color: #34495e;
    text-decoration: none;
  }
  
  .header {
    background-color: white;
    position: fixed;
    z-index: 999;
    height: 100px;
    top: 0;
    left: 0;
    right: 0;
    color: black;
  }
  
  .header .inner {
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 15px 5px;

  }
  
  .header a {
    color: rgba(0, 0, 0, 0.8);
    line-height: 24px;
    transition: color 0.15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: 0.075em;
    margin-right: 1.8em;
  }
  
  .header a:hover {
    color: #888;
  }
  
  .header a.router-link-active {
    color: #e9424b;
    font-weight: 400;
  }
  
  .header a:nth-child(6) {
    margin-right: 0;
  }
  
  .header .github {
    color: #fff;
    font-size: 0.9em;
    margin: 0;
    float: right;
  }
  
  .logo {
    width: 24px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }
  
  .nav_list {
    list-style: none;
          max-width: 1200px;
      
  }
  
  .nav_list li {
    float: left;
    line-height:30px;
    border-top:solid 1px #eee;
    padding:10px
  }
  
  .view {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }
  
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  
  @media (max-width: 860px) {
    .header .inner {
      padding: 15px 30px;
    }
  }
  
  @media (max-width: 600px) {
    .header .inner {
      padding: 15px;
    }
    .header a {
      margin-right: 1em;
    }
    .header .github {
      display: none;
    }
  }
</style>
