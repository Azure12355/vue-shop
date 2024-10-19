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
