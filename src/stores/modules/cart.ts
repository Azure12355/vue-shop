import { defineStore } from "pinia"
import { ref } from "vue"
import type { CartItem } from "@/types/cart"
import CartService from "@/services/CartService"

export const useCartStore = defineStore(
  "cart",
  () => {
    //购物车信息
    const cartList = ref<CartItem[]>([])

    /**
     * 保存购物车信息
     * @param val
     */
    const setCartList = (val: CartItem[]) => {
      cartList.value = val
    }

    /**
     * 清空购物车列表
     */
    const clearCartList = () => {
      cartList.value = []
    }

    /**
     * 重新请求购物车列表并且刷新仓库
     */
    const refreshCartList = async () => {
      const res = await CartService.getMemberCartListAPI()
      cartList.value = res.result
    }

    return {
      cartList,
      setCartList,
      clearCartList,
      refreshCartList,
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
