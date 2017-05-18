<template>
    <span style='font-size:14px'>
        {{times}}
    </span>
</template>
<script>
  import $ from 'jquery'
    export default {
  name: 'counter',
  props: ['endTime'],
  data(){
      return{
          now:0
      }
  },
  mounted(){
        let self = this;
		setInterval(function(){
			self.now = self.getTime();
		}, 1000);
  },
  computed:{
      'times': function(){
             if(new Date(this.endTime)>this.now)
			return this.formate(new Date(this.endTime) -this.now );
            else
            return '项目已过期'
		}
  },
  methods:{
     getTime(){//获取当前时间
        var myDate = new Date();
        myDate.getYear(); 
        myDate.getMonth(); 
        myDate.getDate(); 
        myDate.getHours(); 
        myDate.getMinutes(); 
        myDate.getSeconds();  
        return myDate;
        },
        checkTime(i){
            if(i<10){
                i='0'+i;
                return i
            }
            else
            return i
        },
     formate(leftTime){
         let self=this
            var day =self.checkTime(parseInt(leftTime / 1000 / 60 / 60 / 24, 10),10); //计算剩余的天数 
            var hour = self.checkTime(parseInt(leftTime / 1000 / 60 / 60 % 24, 10),10); //计算剩余的小时 
            var min = self.checkTime(parseInt(leftTime / 1000 / 60 % 60, 10),10); //计算剩余的分钟 
            var sec = self.checkTime(parseInt(leftTime / 1000 % 60, 10),10);
			return  '倒计时   '+ day+' 天 ' +hour + '  时  ' + min + '  分 ' + sec+'秒' ;
		}


  }
    }
</script>
