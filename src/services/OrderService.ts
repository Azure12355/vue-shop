import HttpUtil from "@/utils/HttpUtil"
import type { OrderPreResult } from "@/types/order"
import type { Result } from "@/types/global"

export default class OrderService {
  /**
   * 订单填写页-获取购物车预付订单
   */
  public static getMemberOrderPreAPI = (): Promise<Result<OrderPreResult>> => {
    return HttpUtil.http<OrderPreResult>({
      method: "GET",
      url: "/member/order/pre",
    })
  }

  /**
   * 订单填写页-获取立即购买的预付订单
   * @param data
   */
  public static getMemberOrderPreNowAPI = (data: {
    skuId: string
    count: string
    addressId?: string
  }): Promise<Result<OrderPreResult>> => {
    return HttpUtil.http<OrderPreResult>({
      method: "GET",
      url: "/member/order/pre/now",
      data,
    })
  }
}
