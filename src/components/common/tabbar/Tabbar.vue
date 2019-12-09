<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "tabbar"
	}
</script>

<style scoped>

  #tabbar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*x平移量（左至右边）、y平移量(上至下)、模糊程度、颜色透明度*/
    box-shadow: 0 -2px 1px rgba(100,100,100,0.1);

  }

</style>
