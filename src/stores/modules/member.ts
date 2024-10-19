import type { MemberLoginInfo } from "@/types/member"
import { defineStore } from "pinia"
import { ref } from "vue"

// 定义 Store
export const useMemberStore = defineStore(
  "member",
  () => {
    // 会员信息
    const profile = ref<MemberLoginInfo>()

    // 保存会员信息，登录时使用
    const setProfile = (val: MemberLoginInfo) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  {
    // 浏览器端的持久化配置
    // persist: true,
    // 小程序端持久化配置
    persist: {
      storage: {
        getItem(key) {
          console.log(`从本地取出${key}`)
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          console.log(`持久化保存${key}到本地`)
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
