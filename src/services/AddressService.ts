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
}
