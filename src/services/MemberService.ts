import HttpUtil from "@/utils/HttpUtil"
import type { MemberProfileInfo } from "@/types/member"
import type { Result } from "@/types/global"

export default class MemberService {
  /**
   * 获取会员个人信息
   */
  public static getMemberProfileAPI = (): Promise<Result<MemberProfileInfo>> => {
    return HttpUtil.http<MemberProfileInfo>({
      method: "GET",
      url: "/member/profile",
    })
  }
}
