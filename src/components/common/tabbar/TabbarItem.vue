<template>
  <div class="tabbar-item" @click="click">
    <!--图标-->
    <div v-if="!isActive">
      <slot name="slot-img"/>
    </div>
    <!--点击后图标-->
    <div v-else>
      <slot name="slot-img-active"/>
    </div>
    <!--文字-->
    <div :class="{active : isActive}" :style="activeStyle">
      <slot name="slot-div"/>
    </div>
  </div>
</template>

<script>
	export default {
		name: "TabbarItem",
    props:{
			path:{
				type:String,
        required:true
      },
      activeColor:{
				type: String,
        default:'red'
      }
    },
    data(){
			return {
				// isActive:false,
      }
    },
    computed:{
			isActive(){
				/*点击样式显示*/
				return this.$route.path.indexOf(this.path) >= 0
      },
      activeStyle(){
				return this.isActive ? {color:this.activeColor} :{}
      }
    },
    methods:{
			click(){
        if(this.path === this.$route.path) return;
				/*路由跳转*/
        this.$router.replace(this.path)
			}
    }
	}
</script>

<style scoped>

  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabbar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  /*.active{
    color: red;
  }*/

</style>
