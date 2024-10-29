import HttpUtil from "@/utils/HttpUtil"
import type {
  OrderCreateParams,
  OrderListParams,
  OrderListResult,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult,
} from "@/types/order"
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

  /**
   * 提交订单
   * @param data
   */
  public static postMemberOrderAPI = (data: OrderCreateParams): Promise<Result<{ id: string }>> => {
    return HttpUtil.http<{ id: string }>({
      method: "POST",
      url: "/member/order",
      data,
    })
  }

  /**
   * 获取订单详情
   * @param id
   */
  public static getMemberOrderByIdAPI = (id: string): Promise<Result<OrderResult>> => {
    return HttpUtil.http<OrderResult>({
      method: "GET",
      url: `/member/order/${id}`,
    })
  }

  /**
   * 填写订单-再次购买
   * @param id
   */
  public static getMemberOrderRepurchaseByIdAPI = (id: string): Promise<Result<OrderPreResult>> => {
    return HttpUtil.http<OrderPreResult>({
      method: "GET",
      url: `/member/order/repurchase/${id}`,
    })
  }

  /**
   * 模拟支付
   * @param data
   */
  public static getPayMockAPI = (data: { orderId: string }) => {
    return HttpUtil.http({
      method: "GET",
      url: "/pay/mock",
      data,
    })
  }

  /**
   * 模拟发货
   * @param id
   */
  public static getMemberOrderConsignmentByIdAPI = (id: string) => {
    return HttpUtil.http({
      method: "GET",
      url: `/member/order/consignment/${id}`,
    })
  }

  /**
   * 模拟确认收货
   * @param id
   */
  public static putMemberOrderReceiptByIdAPI = (id: string) => {
    return HttpUtil.http<OrderResult>({
      method: "PUT",
      url: `/member/order/${id}/receipt`,
    })
  }

  /**
   * 获取订单物流
   * @param id
   */
  public static getMemberOrderLogisticsByIdAPI = (id: string) => {
    return HttpUtil.http<OrderLogisticResult>({
      method: "GET",
      url: `/member/order/${id}/logistics`,
    })
  }

  /**
   * 删除订单
   * @param data
   * { ids: string[] }
   */
  public static deleteMemberOrderAPI = (data: { ids: string[] }) => {
    return HttpUtil.http({
      method: "DELETE",
      url: `/member/order`,
      data,
    })
  }

  /**
   * 取消订单
   * @param id
   * @param data { cancelReason: string }
   */
  public static getMemberOrderCancelByIdAPI = (id: string, data: { cancelReason: string }) => {
    return HttpUtil.http<OrderResult>({
      method: "PUT",
      url: `/member/order/${id}/cancel`,
      data,
    })
  }

  /**
   * 获取订单列表
   */
  public static getMemberOrderAPI = (data: OrderListParams) => {
    return HttpUtil.http<OrderListResult>({
      method: "GET",
      url: "/member/order",
      data,
    })
  }
}
