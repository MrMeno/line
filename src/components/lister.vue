<template>
  <div>
    <ul class='dropdown'>
        <li class='list' v-on:mouseover='showList' v-on:mouseout='showList'>
        影视植入资源
            <ul class='drop' v-show='showDrop'>
                <li>1</li>
                <li>2</li>  
                <li>3</li>
                <li>4</li>
            </ul>
        </li>
    </ul>
  </div>
</template>
<script>

    export default {
        name: 'lister',
        props: ['lister'],
        data() {
            return {
                showDrop: false
            }
        },
        methods: {
        showList(){
           this.showDrop=!this.showDrop;
        }
    }
    
    
    
    };
</script>
<style type='text/css'>
    .dropdown {
        list-style: none;
        text-align: center;
        width:150px;
        height:40px;
        background-color:#e50012;
        color:white;
    }
    .dropdown>li{
    
    }
    
    .drop {   
     list-style: none; 
     width:150px;
     position:absolute;
     float:left;
    }
    .drop li{
        color:white;
        background-color:#666;
        width:100%;

      
    }
</style>