<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member'
import HttpUtil from '@/utils/HttpUtil'
import type Result from '@/model/result/Result'
import Banner from '@/model/entity/Banner'

const memberStore = useMemberStore()

const getData = async () => {
  const res: Result<Banner[]> = await HttpUtil.http<Banner[]>({
    method: 'GET',
    url: '/member/profile',
  })
  console.log(res)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData" size="mini" plain type="primary">测试请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
