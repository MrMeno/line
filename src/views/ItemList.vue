<template>
  <div class="news-view">
  <img style="width:100%;height:320px" src='../../public/img/banner.png' alt="">
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
            <div class="row" style="margin:10px;">
             <img v-bind:src="item.pic_url" class='pic_list_3'>
                 <div class="row">
                    <div class="time_counter">
                        <counter :endTime="item.deadline"></counter>
                    </div>
                </div>
                <div class="row">
                  <div class="col col-md-12">
                      <modules :labelList='item.adver_type_list'></modules>
                  </div>
                </div>
                <div class="row text-left" style='font-size:13px;padding-top:12px'>
                   <div class="col col-md-12">
                   <span style='padding-left:30px'>{{"《"+item.name+"》"}}</span>
                   </div>
                </div>
                 <div class="row text-left" style='font-size:13px;padding-top:5px;padding-left:30px;color:#999;font-size:12px'>
                   <div class="col col-md-2 text-right">
                    <span class='text-line'> 
                     主演：
                    </span>
                   </div>
                   <div class="col col-md-2 text-right"  v-for='items in item.actor_list'>
                      <span class='text-line'>{{items.staff_name}}</span>
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
  import counter from '../components/counter.vue'
  import modules from '../components/modules.vue'
export default {
  name: 'item-list',
  mounted(){
  this.listData =this.getList();
  console.log(this.listData);
  },
 ready(){
    },
  data (){
    return {
      listData:[],
      type:'1'
    }
  },
  computed: {
   
  },
  filters:{
    
  },
  components:{
    counter:counter,
    modules:modules
  },
  methods: {
    getList(){
        let self=this;
      var datas=[];
        $.ajax({
            type: "GET",
            url: "/home/drama/solr",
            dataType: "json",
            async: false,
            data:{
             type:self.type,
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
      return datas;
    }
  }
}
</script>

<style tyle='text/css'>
.pic_list_3 {
    width: 256px;
    height: 358px;
    border: solid 0px #ccc;
    padding-top:30px
}

.time_counter {
    height: 20px;
    width: 60%;
    color:white;
    font-weight:600;
    line-height:20px;
    font-size:14px;
    background-color: black;
    left: 20%;
    top: 10%;
    position: absolute;
    opacity: 0.8;
}

</style>
