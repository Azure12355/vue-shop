/**
 * 会员基本信息
 */
export type MemberBaseInfo = {
  /**用户id */
  id: string
  /**用户昵称 */
  nickname: string
  /**用户头像 */
  avatar: string
  /**用户名 */
  account: string
}

/**用户信息 */
export type MemberLoginInfo = MemberBaseInfo & {
  /**用户手机号 */
  mobile: string
  /**token令牌 */
  token: string
}

/**
 * 会员简介信息
 */
export type MemberProfileInfo = MemberBaseInfo & {
  /**
   * 生日
   */
  birthday: null | string
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string
  /**
   * 性别，男、女、未知
   */
  gender: Gender
  /**
   * 职业
   */
  profession: null | string
  [property: string]: any
}

/**
 * 性别，男、女、未知
 */
export type Gender = "男" | "女" | "未知"
