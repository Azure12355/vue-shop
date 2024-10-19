import { defineStore } from "pinia"
import { ref } from "vue"
import type { AddressItem } from "@/types/address"
export const useAddressStore = defineStore(
  "address",
  () => {
    //地址仓库
    const addressList = ref<AddressItem[]>([])

    //设置仓库
    const setAddressList = (val: AddressItem[]) => {
      addressList.value = val
    }

    //清理仓库
    const clearAddressList = () => {
      addressList.value = []
    }

    return {
      addressList,
      setAddressList,
      clearAddressList,
    }
  },
  {
    // 小程序端持久化配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
