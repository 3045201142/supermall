<template>
  <div id="home">
    <top-bar class="home-top-bar"><div slot="center">购物车</div></top-bar>

    <scroll class="content" ref="scroll"
            :probeType="3" @scrollEvent="scrollEvent"
            :pullUpLoad="true" @pullingUp="pullingUp">

      <home-swiper :banners="banners"/>

      <recommend-view :recommend="recommands"/>

      <feature-view/>

      <tab-controll :titles="['流程','最新','分发']" @tabClick="tabclick"/>

      <goods-list :goodsList="this.goods[goodsType].list"></goods-list>


    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>



  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import TopBar from "components/common/topbar/TopBar";
  import TabControll from "components/content/tabControll/TabControll";
  import GoodsList from "components/content/goodsList/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";


  import {
    getHomeMutiData,getHomeGoods
  } from "network/home";


  export default {
    name: 'home',
    components: {
      BackTop,
      RecommendView,
      HomeSwiper,
      FeatureView,
      GoodsList,
      Scroll,

      TopBar,
      TabControll

    },
    data() {
      return {
        banners: [],
        recommands: [],
        goods:{
          'pop': {page:0,list:[]},
          'new': {page:0,list:[]},
          'sell': {page:0,list:[]}
        },
        goodsType: 'pop',
        isShowBackTop:false
      }
    },
    created() {
      this.getHomeMutiData()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听相关的方法
       *
       */
      tabclick(index) {
        switch (index) {
            case 0:
              this.goodsType = 'pop';
              break;
            case 1:
              this.goodsType = 'new';
              break;
            case 2:
              this.goodsType = 'sell';
              break;
            default:
              this.goodsType = 'pop'
        }
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      scrollEvent(pos){
        // console.log(pos);
        this.isShowBackTop = (-pos.y) > 1000
      },
      pullingUp(){
        console.log("上拉");
        this.getHomeGoods(this.goodsType)
        this.$refs.scroll.finishPullUp();
      },

      /**
       * 网络请求相关的方法
       */
      getHomeMutiData(){
        getHomeMutiData().then(res => {
          this.banners = res.data.banner.list
          this.recommands = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page + 1

        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }

    }
  }
</script>

<style scoped>
  #home{
   /* margin-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-top-bar{
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

   .content{
     overflow: hidden;
     position: absolute;
     top: 44px;
     bottom: 49px;
     left: 0;
     right: 0;

  }

 /* .content{
    height: 300px;
    overflow: hidden;
    height: calc(100% - 93px);
  }*/
</style>
