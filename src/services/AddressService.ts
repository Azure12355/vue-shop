import type { AddressItem, AddressParams } from "@/types/address"
import HttpUtil from "@/utils/HttpUtil"
import type { Result } from "@/types/global"

export default class AddressService {
  /**
   * 添加收货地址
   * @param addressParam 收货地址参数
   */
  public static postMemberAddressAPI = (
    addressParam: AddressParams,
  ): Promise<Result<{ id: string }>> => {
    return HttpUtil.http<{ id: string }>({
      method: "POST",
      url: "/member/address",
      data: addressParam,
    })
  }

  /**
   * 获取收获地址列表
   */
  public static getMemberAddressAPI = (): Promise<Result<AddressItem[]>> => {
    return HttpUtil.http<AddressItem[]>({
      method: "GET",
      url: "/member/address",
    })
  }

  /**
   * 获取收获地址详情
   * @param id 地址id
   */
  public static getMemberAddressDetailsAPI = (id: string): Promise<Result<AddressItem>> => {
    return HttpUtil.http<AddressItem>({
      method: "GET",
      url: `/member/address/${id}`,
    })
  }

  /**
   * 修改收货地址
   * @param id 地址id(路径参数)
   * @param data 表单数据(请求体参数)
   */
  public static putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
    return HttpUtil.http({
      method: "PUT",
      url: `/member/address/${id}`,
      data,
    })
  }
}
