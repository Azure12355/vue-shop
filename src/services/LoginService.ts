import type { Result } from "@/types/global"
import type { MemberInfo } from "@/types/member"
import HttpUtil from "@/utils/HttpUtil"

/**登录参数 */
type LoginParam = {
  code: string
  encryptedData: string
  iv: string
}

export default class LoginService {
  /**
   * 小程序手机号登录 (个人开发者无法使用)
   * @param data 请求参数
   * @returns 用户信息
   */
  public static postWxMinAPI = (data: LoginParam): Promise<Result<MemberInfo>> => {
    return HttpUtil.http<MemberInfo>({
      method: "POST",
      url: "/login/wxMin",
      data,
    })
  }

  /**
   * 模拟小程序手机号登录 (内测)
   * @param phoneNumber 手机号
   * @returns 用户信息
   */
  public static postLoginWxMinSimpleAPI = (phoneNumber: string): Promise<Result<MemberInfo>> => {
    return HttpUtil.http<MemberInfo>({
      method: "POST",
      url: "/login/wxMin/simple",
      data: {
        phoneNumber,
      },
    })
  }
}
