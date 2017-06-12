<template>
	<div style='padding:30px'>
		<div class="row" style='padding-top:20px'>
			<div class="col col-md-12 text-left">
				<span class='t1'>发布媒体</span>
			</div>
		</div>
		<div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>影视剧名称</span>
			</div>
			<div class="col col-md-6 text-left">
				<span class='t2'>题材类型</span>
			</div>
		</div>

		  <div class="row" style='padding-top:10px'>
			<div class="col col-md-6 text-left">
				<el-input style='width:90%' placeholder='请输入影视剧名称'></el-input>
			</div>
			<div class="col col-md-6 text-left">	
            <el-select v-model="dramaType" style='width:90%' multiple filterable placeholder="请选择类型" :loading="loading">
                 <el-option  v-for="item in dramaTypeList"   :key="item.value"  :label="item.label"  :value="item.value">
             </el-option>
           </el-select>
			</div>
		  </div>

			<div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>导演</span>
			</div>
			<div class="col col-md-6 text-left">
				<span class='t2'>编剧</span>
			</div>
		   </div>

		   <div class="row" style='padding-top:10px'>
			<div class="col col-md-6 text-left">
	       <el-select v-model="director" style='width:90%' multiple filterable  remote placeholder="请选择导演"  :remote-method="remoteDirector"  :loading="loading">
                 <el-option  v-for="item in directorOps"   :key="item.value"  :label="item.label"  :value="item.value">
             </el-option>
           </el-select>
			</div>
			<div class="col col-md-6 text-left">
				   <el-select v-model="writer" style='width:90%' multiple filterable  remote placeholder="请选择编剧"  :remote-method="remoteWriter"  :loading="loading">
                 <el-option  v-for="item in writerOps"   :key="item.value"  :label="item.label"  :value="item.value">
             </el-option>
           </el-select>
			</div>
		  </div>

		  	  <div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>主演</span>
			</div>
		   </div>


		     <div class="row" style='padding-top:10px'>
			<div class="col col-md-12 text-left">
				 <el-select v-model="actor" style='width:95%' multiple filterable  remote placeholder="请选择主演"  :remote-method="remoteActor"  :loading="loading">
                 <el-option  v-for="item in actorOps"   :key="item.value"  :label="item.label"  :value="item.value">
             </el-option>
           </el-select>
			</div>
		  </div>

		  <div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>制片地区</span>
			</div>
			<div class="col col-md-6 text-left">
				<span class='t2'>语言</span>
			</div>
		   </div>

		   <div class="row" style='padding-top:10px'>
			<div class="col col-md-6 text-left">
				<el-select v-model="area" style='width:90%' filterable placeholder="请选择地区">
				 <el-option v-for="item in areaList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
               </el-select>
			</div>
			<div class="col col-md-6 text-left">
				<el-select v-model="language" style='width:90%' filterable placeholder="请选择语言">
				 <el-option v-for="item in languageList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
               </el-select>
			</div>
		  </div>

		    	  <div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>播放平台</span>
			</div>
		   </div>


		     <div class="row" style='padding-top:10px'>
			<div class="col col-md-12 text-left">
					<!-- <el-select  v-model="value10" style='width:95%'  multiple  filterable  remote  placeholder="请选择文章标签">
                            <el-option v-for="item in options5" :key="item.value" :label="item.label"  :value="item.value"></el-option>
                     </el-select> -->
			</div>
		  </div>

		  <div class="row" style='padding-top:20px'>
			<div class="col col-md-3 text-left">
				<span class='t2'>开机时间</span>
			</div>
			<div class="col col-md-3 text-left">
				<span class='t2'>上映时间</span>
			</div>
		   </div>

		   <div class="row" style='padding-top:10px'>
			<div class="col col-md-3 text-left">
				 <el-date-picker v-model="startDate" type="date" placeholder="选择日期" >
                  </el-date-picker>
			</div>
			<div class="col col-md-3 text-left">
				 <el-date-picker v-model="endDate" type="date" placeholder="选择日期">
                  </el-date-picker>
			</div>
		  </div>

		   	  <div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>植入品类</span>
			</div>
		   </div>


		     <div class="row" style='padding-top:10px'>
			<div class="col col-md-12 text-left">
				<el-select v-model="adver" style='width:95%' multiple filterable placeholder="请选择植入品类">
				 <el-option v-for="item in adverList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
               </el-select>
			</div>
		  </div>

		  	  <div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>项目优势</span>
			</div>
		   </div>


		     <div class="row" style='padding-top:10px'>
			<div class="col col-md-12 text-left">
				<el-input type='textarea'  v-model="advantage"  style='width:95%'><el-tag></el-tag></el-input>
			</div>
		  </div>


 	          <div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>故事梗概</span>
			</div>
		   </div>


		     <div class="row" style='padding-top:10px'>
			<div class="col col-md-12 text-left">
				<el-input type='textarea' v-model="introduction"  style='width:95%'><el-tag></el-tag></el-input>
			</div>
		  </div>

		    <div class="row" style='padding-top:20px'>
			<div class="col col-md-12 text-left">
				<span class='t2'>封面图片（格式为jpg，png，gif文件，大小不超过3MB、424*600像素）</span>
			</div>
		   </div>


		     <div class="row" style='padding-top:10px'>
			<div class="col col-md-12 text-left">
				<el-upload class="avatar-uploader" action="/home/upload":show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                   <img v-if="coverImageUrl" :src="coverImageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
			</div>
		  </div>

		   <div class="row" style='padding-top:20px'>
			<div class="col col-md-12 text-left">
				<span class='t2'>封面图片（格式为jpg，png，gif文件，大小不超过3MB、424*600像素）</span>
			</div>
		   </div>


		     <div class="row" style='padding-top:10px'>
			<div class="col col-md-3 text-left">
				<el-upload class="avatar-uploader" action="/home/upload":show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                   <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
			</div>
		  </div>

		   <div class="row" style='padding-top:20px'>
			<div class="col col-md-6 text-left">
				<span class='t2'>招商方案</span>
			</div>
		   </div>


		     <div class="row" style='padding-top:10px'>
			<div class="col col-md-1 text-right">		
				  <span class='el-icon-upload2'></span>
           
			</div>
			<div class="col col-md-2 text-left">
				    <el-upload class="upload-demo" ref="upload"  action="/home/upload"  :on-preview="handlePreview" 
                       :on-remove="handleRemove" :file-list="fileList" :auto-upload="false"> 
                     <a  @click="submitUpload">上传招商方案</a>       
               </el-upload>
			</div>
		  </div>


		  <div class="row" style='padding-top:10px'>
			<div class="col col-md-12 text-center">
			<el-button type='danger'>确认提交</el-button>
			</div>
		  </div>


	
	</div>
</template>
<script>
import multipleInput from '../../components/multSelected.vue'
import select2j from '../../components/select2Json.vue'
import axios from 'axios'
import $ from 'jquery'
export default{
    mounted() {
 	    let self=this;  
 	    this.directorList=this.getDATA('director');
 	    this.directorList=this.getDATA('actor');
 	    this.directorList=this.getDATA('wirter');
 	    this.areaList=this.loadAll('area');
 	    this.languageList=this.loadAll('language');
 	    this.adverList=this.loadAll('adver');
 	     this.dramaTypeList=this.loadAll('drama');
    },
    components:{
    	multipleInput,select2j
    },
	data(){//以后把select2数据，临时数据，选中数据封装成一个大的类
		return {
			name:'',
			type:'',
			list: [],
            loading: false,
            dramaType:[],
            dramaTypeList:[],
			director:[],//选中的数据
			directorOps:[],//查询的临时数据
			directorList:[],//存放数组数据
			writer:[],
			writerOps:[],
			writerList:[],  		
			actor:[],
			actorOps:[],
			actorList:[],
			area:'',
			areaList:[],
			language:'',
			languageList:[],
			startDate:'',
			endDate:'',
			adver:[],
			adverList:[],
			coverImageUrl: '',
			imageUrl:'',
		    dynamicTags: [],
		    advantage:'',
		    introduction:'',
            inputVisible: false,
            inputValue: '',
             fileList:[],
             multiple: {
                    originOptions: [],
                    selectedList: []
                }
		}
	},
   watch:{//值变化之后执行此方法监听
   
   },
	methods:{
          getDATA(type){//获取staff数据
            	let self=this;
             var arrList=new Array();
            	if(type=='director')
            	{
                 axios.get('/home/staff_list?type=2').then(function(res){
                 	if(res.status==200){
                 		var datas=res.data.data;     	
                 		for(var i=0;i<datas.length;i++)
                 		{
                 			var oj=datas[i].nameZh
                 			arrList[i]=oj;
                 		}
                 		 self.list = self.directorList.map(function(item)//最好能在mounted中赋值，但是axios必须是同步，否则无法获取到值
	    	            {
	    		           return{value: item, label: item }
	    	             });
                 	}
                 	else{
                 		self.$alert("网络异常，请重试")
                 	}
                  });
            	}
               else if(type=='actor'){
                    axios.get('/home/staff_list?type=1').then(function(res){
                	if(res.data.ret==0){
                 		var datas=res.data.data;
                 		var arrList=new Array();
                 		for(var i=0;i<datas.length;i++)
                 		{
                 			var oj=datas[i].nameZh;//{id:datas[i].id,name:datas[i].nameZh}
                 			arrList.push(oj);
                 		}
                 		self.actorList=arrList;
                 		 self.list = self.actorList.map(function(item)//最好能在mounted中赋值，但是axios必须是同步，否则无法获取到值
	    	            {
	    		           return{value: item, label: item }
	    	             });

                 	}
                  });
                 }
               else if(type=='writer')
                {
            	  axios.get('/home/staff_list?type=3').then(function(res){
               	if(res.data.ret==0){
                 		var datas=res.data.data;
                 		var arrList=new Array();
                 		for(var i=0;i<datas.length;i++)
                 		{
                 			var oj={id:datas[i].id,name:datas[i].nameZh}
                 			arrList.push(oj);
                 		}
                 		self.writerList=arrList;
                 		 self.list = self.writerList.map(function(item)//最好能在mounted中赋值，但是axios必须是同步，否则无法获取到值
	    	            {
	    		           return{value: item, label: item }
	    	             });
                 	}
                  });
                }
                return arrList;
          },

      getUserInfo(){
            axios.get('/home/user/user_info').then(function(res){
                 console.log(res.data)
             });
      },
      loadAll(type) {
       var arr=[];
       let self=this;
       if(type=='area')
       {
            axios.get('/home/select?type='+type).then(function(res){
                	if(res.status==200){
                 		var datas=res.data;
                 		for(var i=0;i<datas.length;i++)
                 		{
                 			var oj={label:datas[i].text,value:datas[i].id}
                 			arr.push(oj);
                 		}
                 	}
                  });
        }
        else if(type=='language')
        {
          axios.get('/home/select?type='+type).then(function(res){
                	if(res.status==200){
                 		var datas=res.data;
                 		for(var i=0;i<datas.length;i++)
                 		{
                 			var oj={label:datas[i].text,value:datas[i].id}
                 			arr.push(oj);
                 		}
                 	}
                  });	
        }  
        else if(type=='adver')
            {
          axios.get('/home/select?type='+type).then(function(res){
                	if(res.status==200){
                 		var datas=res.data;
                 		console.log(res)
                 		for(var i=0;i<datas.length;i++)
                 		{
                 			var oj={label:datas[i].text,value:datas[i].id}
                 			arr.push(oj);
                 		}
                 	}
                  });	
        
        }  else if(type=='drama')
            {
          axios.get('/home/select?type='+type).then(function(res){
                	if(res.status==200){
                 		var datas=res.data;
                 		console.log(res)
                 		for(var i=0;i<datas.length;i++)
                 		{
                 			var oj={label:datas[i].text,value:datas[i].id}
                 			arr.push(oj);
                 		}
                 	}
                  });	
        }
         return arr;
      },
        remoteDirector(query) {
         if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.directorOps = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.directorOps = [];
        }
      },
       remoteActor(query) {
         if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.actorOps = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.actorOps = [];
        }
      },
       remoteWriter(query) {
         if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.writerOps = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.writerOps = [];
        }
      },


       handleAvatarSuccess(res, file) {//图片上传方法
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
      },
        customMultipleCallback(data){
            this.customMultiple.selectedList = data;
      },
      callBackDirector(data) {
             this.director = data;
      },
       callBackWriter(data) {
             this.writer = data;
      },
        callBackActor(data) {
             this.actor = data;
      },
       submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
	}
}
</script>
<style>
@import '../../../public/css/select-vue-component.css';
	.t1{
		border-left:2px solid #e40011;
		font-size: 15px;
	}
	.t2{
          font-size: 13px;
          color:#999;
	}
	 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
   .el-upload__input{
  	display: none
  }

</style>