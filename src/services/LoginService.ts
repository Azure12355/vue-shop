import type { Result } from "@/types/global"
import type { UserInfo } from "@/types/login"
import HttpUtil from "@/utils/HttpUtil"

/**登录参数 */
type LoginParam = {
  code: string
  encryptedData: string
  iv: string
}

export default class LoginService {
  /**小程序登录接口 */
  public static postWxMinAPI = (data: LoginParam): Promise<Result<UserInfo>> => {
    return HttpUtil.http<UserInfo>({
      method: "POST",
      url: "/login/wxMin",
      data,
    })
  }
}
