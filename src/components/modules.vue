<template>
      <div class="row" id='modes'>
      <div class="col col-md-3 text-center" id='tabs' style='padding-top:10px'  v-for='items in labelList'>
         {{items.adver_type_name}}
      </div>
 </div>
</template>
<script>
  import $ from 'jquery'
    export default {
  name: 'modules',
  props: ['labelList'],
  data(){
    return{
         
    }
  },
  mounted(){
     
  },
  computed:{

  },
  methods:{
  }
    }
</script>
<style>

    #modes{
    position:absolute;
    bottom:30%;
    left:19%;
    opacity:0;
    width:256px;
    height:68px;
    word-break: keep-all;
    white-space: nowrap;
    font-size:12px;
    overflow: hidden;
    text-overflow: ellipsis;/*clip */
    color:white;
    min-height:80px;
    background-color:black

    }
    .show{
        display:block
    }
    #modes:hover{
      opacity:0.7
    }
</style>
