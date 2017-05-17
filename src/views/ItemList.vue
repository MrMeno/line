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
            <div class="row" style='margin:10px'>
               <img v-bind:src="item.pic_url" class='pic_list_3'>
                 <div class="row">
                    <div class="time_counter">
                        <counter :endTime="item.deadline"></counter>
                    </div>
                </div>
                <div class="row">
                   <div class="modules">
                      <modules :labelList='item.adver_type_list'></modules>
                    </div>
                </div>
                <div class="row text-left" style='font-size:13px;padding-top:10px'>
                   <div class="col col-md-12">
                   <span>{{"《"+item.name+"》"}}</span>
                   </div>
                </div>

                 <div class="row text-left" style='font-size:13px;padding-top:10px;color:#999;font-size:10px'>
                   <div class="col col-md-2">
                  <span class='text-line'> 主演：</span>
                   </div>
                   <div class="col col-md-2"  v-for='items in item.actor_list'>
                      <span class='text-line'> {{items.staff_name}}</span>
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
      listData:[]
    }
  },
  computed: {
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
      return datas;
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
    height: 30px;
    width: 50%;
    color:white;
    font-weight:600;
    line-height:30px;
    font-size:13px;
    background-color: black;
    left: 25%;
    top: 3%;
    position: absolute;
    opacity: 1;
}

</style>
