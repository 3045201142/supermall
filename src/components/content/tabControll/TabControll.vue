<template>
	<div class="tab-controll">
		<div v-for="(item,index) in titles" class="tab-controll-item" @click="activeAction(index)" >
			<span :class="{active:currIndex === index}">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabControll",
		props:{
			titles: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currIndex: 0
			}
		},
		methods: {
			activeAction(index){
				this.currIndex = index;
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style scoped>
	.tab-controll{
		display: flex;
		background-color: #fff;
		margin-bottom: 15px;
		height: 33px;

		position: sticky;
		top: 44px;
		z-index: 9;

	}

	.tab-controll-item{
		flex: 1;
		text-align: center;
	}

	.tab-controll-item span{
		padding: 5px;

	}

	.active{
		color: red;
		border-bottom: 3px solid pink;
	}

</style>