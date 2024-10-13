import type { PageParams, Result } from "@/types/global"
import type { HotResult } from "@/types/hot"
import HttpUtil from "@/utils/HttpUtil"

/**热门推荐请求参数 */
type HotParam = { subType?: string } & PageParams

export default class HotService {
  /**
   * 请求热门推荐数据
   * @param url 请求地址
   * @param data 请求参数
   * @returns 热门推荐数据
   */
  public static getHotRecommandAPI = (url: string, data?: HotParam): Promise<Result<HotResult>> => {
    return HttpUtil.http<HotResult>({
      method: "GET",
      url,
      data,
    })
  }
}
