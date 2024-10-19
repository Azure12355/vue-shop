import { defineStore } from "pinia"
import { ref } from "vue"
import type { CartItem } from "@/types/cart"

export const useCartStore = defineStore(
  "cart",
  () => {
    //购物车信息
    const cartList = ref<CartItem[]>([])

    //保存购物车列表
    const setCartList = (val: CartItem[]) => {
      cartList.value = val
    }

    //清空购物车列表
    const clearCartList = () => {
      cartList.value = []
    }

    return {
      cartList,
      setCartList,
      clearCartList,
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
