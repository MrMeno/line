<template>
  <div class="news-view">
  <img style="width:100%;height:300px" src='../../public/img/banner.png' alt="">
    <div class="container-fluid">
    <div class="row" style='padding:30px'>
     <div class="col col-md-3">
        <strong><big>电视剧</big></strong><span style='padding:30px'>最新电视剧资源</span>
     </div>
    </div>
    <div class="row">
    <div class="col col-md-1"></div>
    <div class="col col-md-10">    
        <div class="row">
          <div class="col col-md-3" v-for='item in listData' style='height:400px;cursor:pointer;'>
            <div class="row" style='margin:10px;border:solid 1px #eee'>
               <img v-bind:src="item.pic_url" class='pic_list_3'>
                 <div class="row">
                    <div class="time_counter">
                        <p v-bind:html="timeCouter(item.deadline)">
                       
                        </p>
                    </div>
                </div>
            </div>
          </div>

        </div>
    </div>
    <div class="col col-md-1"></div>
        
    </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'item-list',
  mounted(){
  this.listData =this.getList();
 
  },
  data (){
    return {
      listData:[]
    }
  },
  computed: {

  },
  methods: {
    getList(){
      var datas=[];
        $.ajax({
            type: "GET",
            url: "/home/drama/solr",
            dataType: "json",
            async: false,
            data:{
             type:2,
             page:1
            },
            success: function(resquet) {
                if (resquet != null) {
                    datas = resquet.data;
                } else {
                    console.log('error')
                }
            }
        });
      console.log(datas);
      return datas;
    },timeCouter(Dates){
      this.getTime=function(){
      var myDate = new Date();
        myDate.getYear(); //获取当前年份(2位)
        myDate.getMonth(); //获取当前月份(0-11,0代表1月)
        myDate.getDate(); //获取当前日(1-31)
        myDate.getHours(); //获取当前小时数(0-23)
        myDate.getMinutes(); //获取当前分钟数(0-59)
        myDate.getSeconds(); //获取当前秒数(0-59)
        Date.prototype.Format = function(fmt) { //author: meizz 
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
         if (new RegExp("(" + k + ")").test(fmt))
         fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };
        return myDate;
        }
        this.checkTime=function(i) { //将0-9的数字前面加上0，例1变为01 
        if (i < 10) {
            i = "0" + i;
           }
          return i;
          };
        var endDate = new Date(Dates);
        var startDate =this.getTime();
        if (endDate > startDate) {
            var leftTime = endDate - startDate;
            var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
            var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
            var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
            var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
            days = this.checkTime(days);
            hours = this.checkTime(hours);
            minutes = this.checkTime(minutes);
            seconds = this.checkTime(seconds);
            var str = "<span class='times'>" + days + "</span>天" +
                "<span class='times'>" + hours + "</span>时" +
                "<span class='times'>" + minutes + "</span>分" +
                "<span class='times'>" + seconds + "</span>秒";
            return str;
        } else {
            var str = "项目已过期";
            return str;
        }
    }

  }
}
</script>

<style tyle='text/css'>
.pic_list_3 {
    width: 100%;
    height: 300px;
    border: solid 1px #ccc;
}

.time_counter {
    height: 35px;
    width: 250px;
    color:white;
    font-weight:600;
    line-height:30px;
    font-size:13px;
    background-color: black;
    left: 18.75%;
    top: 0%;
    position: absolute;
    opacity: 1;
}

</style>
