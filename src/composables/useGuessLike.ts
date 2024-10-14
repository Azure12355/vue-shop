import type { XtxGuessInstance } from "@/types/component"
import { ref } from "vue"

/**
 * 猜你喜欢组合式函数
 * @returns 组件实例和滚动触底回调
 */
export const useGuessLike = () => {
  //猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()
  //猜你喜欢触底加载分页
  const onScrolltolower: UniHelper.ScrollViewOnScrolltolower = () => {
    console.log("滚动触底了~")
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
