<template>
<div class='templates'>
      <div class="row" id='modes'>
      <div class="col col-md-3"  v-for='items in labelList'>
       {{items.adver_type_name}}
      </div>
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
    .templates{
        opacity:0.7;
        width:100%;
        height:auto;
      word-break: keep-all;
    white-space: nowrap;
    font-size:12px;
    overflow: hidden;
    text-overflow: ellipsis;/*clip */

    }
    #modes{
      position:absolute;
      bottom:30%

    }
</style>
