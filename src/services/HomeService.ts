import type Result from '@/model/result/Result'
import type { BannerItem } from '@/types/home'
import HttpUtil from '@/utils/HttpUtil'

export default class HomeService {
  /**
   * 请求轮播图
   * @param distributionSite 请求首页轮播图还是分类轮播图，默认为1
   * @returns 轮播图数据
   */
  public static getHomeBannerAPI = (distributionSite = 1): Promise<Result<BannerItem[]>> => {
    return HttpUtil.http<BannerItem[]>({
      method: 'GET',
      url: '/home/banner',
      data: {
        distributionSite,
      },
    })
  }
}
