<template>
	<div class="top-bar">
		<div class="top-bar-left"><slot name="left"></slot></div>
		<div class="top-bar-center"><slot name="center"></slot></div>
		<div class="top-bar-right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "TopBar"
	}
</script>

<style scoped>
	.top-bar{
		display: flex;
		height: 44px;
		line-height: 44px;
		box-shadow: 0 2px 1px rgba(100,100,100,0.1);
	}

	.top-bar-left,.top-bar-right{
		width: 60px;
	}

	.top-bar-center{
		flex: 1;
		text-align: center;
	}

</style>