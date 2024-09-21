import type Result from '@/model/result/Result'
import type { PageParams } from '@/types/global'
import HttpUtil from '@/utils/HttpUtil'

/**热门推荐请求参数 */
type HotParam = { subType?: string } & PageParams

export default class HotService {
  /**
   * 请求热门推荐数据
   * @param url 请求地址
   * @param data 请求参数
   * @returns 热门推荐数据
   */
  public static getHotRecommandAPI = (url: string, data?: HotParam): Promise<Result<any>> => {
    return HttpUtil.http<any>({
      method: 'GET',
      url,
      data,
    })
  }
}
