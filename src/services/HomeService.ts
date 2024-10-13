import type { PageParams, PageResult, Result } from "@/types/global"
import type { BannerItem, CategoryItem, GuessItem, HotItem } from "@/types/home"
import HttpUtil from "@/utils/HttpUtil"

export default class HomeService {
  /**
   * 请求轮播图
   * @param distributionSite 请求首页轮播图还是分类轮播图，默认为1
   * @returns 轮播图数据
   */
  public static getHomeBannerAPI = (distributionSite = 1): Promise<Result<BannerItem[]>> => {
    return HttpUtil.http<BannerItem[]>({
      method: "GET",
      url: "/home/banner",
      data: {
        distributionSite,
      },
    })
  }

  /**
   * 请求首页分类数据
   * @returns 分类数据
   */
  public static getHomeCategoryAPI = (): Promise<Result<CategoryItem[]>> => {
    return HttpUtil.http<CategoryItem[]>({
      method: "GET",
      url: "/home/category/mutli",
    })
  }

  /**
   * 请求热门推荐数据
   * @returns 热门推荐数据
   */
  public static getHotAPI = (): Promise<Result<HotItem[]>> => {
    return HttpUtil.http<HotItem[]>({
      method: "GET",
      url: "/home/hot/mutli",
    })
  }

  /**
   * 请求猜你喜欢数据
   * @param data 分页参数
   * @returns 猜你喜欢数据
   */
  public static getHomeGoodsGuessLikeAPI = (
    data?: PageParams,
  ): Promise<Result<PageResult<GuessItem>>> => {
    return HttpUtil.http<PageResult<GuessItem>>({
      method: "GET",
      url: "/home/goods/guessLike",
      data,
    })
  }
}
