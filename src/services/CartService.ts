import HttpUtil from "@/utils/HttpUtil"
import type { Result } from "@/types/global"
import type { CartItem } from "@/types/cart"

export default class CartService {
  /**
   * 加入购物车
   * @param data skuId skuID, count: 商品数量
   */
  public static postMemberCartAPI = (data: {
    skuId: string
    count: number
  }): Promise<Result<CartItem>> => {
    return HttpUtil.http<CartItem>({
      method: "POST",
      url: "/member/cart",
      data,
    })
  }

  /**
   * 获取购物车列表
   */
  public static getMemberCartListAPI = (): Promise<Result<CartItem[]>> => {
    return HttpUtil.http<CartItem[]>({
      method: "GET",
      url: "/member/cart",
    })
  }

  /**
   * 删除/清空购物车单品
   * @param data
   */
  public static delMemberCartAPI = (data: { ids: string[] }): Promise<Result<any>> => {
    return HttpUtil.http({
      method: "DELETE",
      url: "/member/cart",
      data,
    })
  }
}
