<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommend">
			<a :href="item.link"><img :src="item.image"></a>
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
		props: {
			recommend: {
				type: Array,
				default() {
					return [];
				}
			}
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
		text-align: center;
		font-size: 15px;
		border-bottom: 8px solid #eee;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.recommend-item{
		flex: 1;
	}

	.recommend-item img{
		width: 70px;
		height: 70px;
	}
</style>