<script setup lang="ts">
import HomeService from "@/services/HomeService"
import CustomNavBar from "./components/CustomNavBar.vue"
import CategoryPanel from "./components/CategoryPanel.vue"
import HotPanel from "./components/HotPanel.vue"
import { onLoad } from "@dcloudio/uni-app"
import { ref } from "vue"
import type { BannerItem, CategoryItem, HotItem } from "@/types/home"
import type { XtxGuessInstance } from "@/types/component"
import PageSkeleton from "./components/PageSkeleton.vue"

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await HomeService.getHomeBannerAPI()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await HomeService.getHomeCategoryAPI()
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
const getHotData = async () => {
  const res = await HomeService.getHotAPI()
  hotList.value = res.result
}

//获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
/**
 * 滚动触底回调
 */
const onScrolltolower: UniHelper.ScrollViewOnScrolltolower = () => {
  console.log("滚动触底了~")
  console.log(guessRef)
  guessRef.value?.getMore()
}

//当前下拉刷新的动画状态
const isTriggered = ref(false)
/**
 * 顶部刷新回调
 */
const onRefresherrefresh: UniHelper.ScrollViewOnRefresherrefresh = async () => {
  isTriggered.value = true
  //重新请求数据
  guessRef.value?.resetData(),
    await Promise.all([
      getHomeBannerData(),
      getHomeCategoryData(),
      getHotData(),
      guessRef.value?.getMore(),
    ])
  isTriggered.value = false
}

//是否正在加载
const isLoding = ref(false)

onLoad(async () => {
  isLoding.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotData()])
  isLoding.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar />

  <!-- 页面骨架屏 -->
  <PageSkeleton v-if="isLoding" />
  <template v-else>
    <!-- 滚动容器 -->
    <scroll-view
      refresher-enabled
      :refresher-triggered="isTriggered"
      @refresherrefresh="onRefresherrefresh"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      scroll-y
    >
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </scroll-view>
  </template>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
  .scroll-view {
    flex: 1;
  }
}
</style>
