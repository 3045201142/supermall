<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
	
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: "Scroll",
		props:{
			probeType:{
				type: Number,
				default: 0
			},
			pullUpLoad:{
				type: Boolean,
				default: true
			}
		},
		data(){
			return {
				bs: null
			}
		},
		mounted() {
			this.bs = new BScroll(this.$refs.wrapper,{
				click:true,
				probeType: this.probeType, //这个属性有，监听滚动才能生效
				pullUpLoad: this.pullUpLoad
			})

			//监听滚动事件
			this.bs.on('scroll',pos => {
				// console.log(pos);
				this.$emit('scrollEvent',pos)
			})

			//监听上拉加载更多
			this.bs.on('pullingUp',() => {
				this.$emit('pullingUp')
			/*	console.log('上拉加载更多11');
				this.bs.finishPullUp();*/
			})
		},
		methods:{
			scrollTo(x,y,time=300){
				this.bs.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.bs.finishPullUp()
			}
		}

	}
</script>

<style scoped>

</style>