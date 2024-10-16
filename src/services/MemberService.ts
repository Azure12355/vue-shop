import HttpUtil from "@/utils/HttpUtil"
import type { MemberProfileInfo, MemberProfileUpdateParam } from "@/types/member"
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

  /**
   * 修改会员个人信息
   * @param newProfile 修改后的个人信息
   */
  public static putMemberProfileAPI = (
    newProfile: MemberProfileUpdateParam,
  ): Promise<Result<MemberProfileInfo>> => {
    return HttpUtil.http<MemberProfileInfo>({
      method: "PUT",
      url: "/member/profile",
      data: newProfile,
    })
  }
}
