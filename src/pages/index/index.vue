<script setup lang="ts">
import HomeService from '@/services/HomeService'
import CustomNavBar from './components/CustomNavBar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await HomeService.getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavBar />
  <XtxSwiper :list="bannerList" />
  <view class="index">index</view>
  <uni-card
    title="基础卡片"
    sub-title="副标题"
    extra="额外信息"
    thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
  >
    <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
  </uni-card>
</template>

<style lang="scss">
//
</style>
