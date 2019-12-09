<template>
  <tabbar>
    <tabbar-item path="/home" activeColor="deepPink">
      <img slot="slot-img" src="~assets/img/tabbar/home.png" alt="">
      <img slot="slot-img-active" src="~assets/img/tabbar/home-active.png" alt="">
      <div slot="slot-div">首页</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="deepPink">
      <img slot="slot-img" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="slot-img-active" src="~assets/img/tabbar/cart-active.jpg" alt="">
      <div slot="slot-div">购物车</div>
    </tabbar-item>
    <tabbar-item path="/category" activeColor="deepPink">
      <img slot="slot-img" src="~assets/img/tabbar/cate.png" alt="">
      <img slot="slot-img-active" src="~assets/img/tabbar/cate-active.jpg" alt="">
      <div slot="slot-div">分类</div>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor="deepPink">
      <img slot="slot-img" src="~assets/img/tabbar/user.png" alt="">
      <img slot="slot-img-active" src="~assets/img/tabbar/user-active.png" alt="">
      <div slot="slot-div">个人</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
	import Tabbar from "components/common/tabbar/Tabbar";
	import TabbarItem from "components/common/tabbar/TabbarItem";

	export default {
		name: "MainTabbar",
    components:{
      Tabbar,
			TabbarItem
    }
	}
</script>

<style scoped>


</style>
