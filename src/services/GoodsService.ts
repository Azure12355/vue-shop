import type { Result } from "@/types/global"
import type { GoodsDetails } from "@/types/goods"
import HttpUtil from "@/utils/HttpUtil"

export default class GoodsService {
  /**
   * 获取商品详情
   * @param id 商品id
   * @returns 商品详情数据
   */
  public static getGoodsByIdAPI = (id: string): Promise<Result<GoodsDetails>> => {
    return HttpUtil.http<GoodsDetails>({
      method: "GET",
      url: "/goods",
      data: {
        id,
      },
    })
  }
}
