/**分页返回结果类型 */
export type PageResult<T> = {
  /**列表数据 */
  items: T[]
  /**数据总数 */
  counts: number
  /**当前页 */
  page: number
  /**每页数量 */
  pageSize: number
  /**总页数 */
  pages: number
}

/**通用返回结果类型 */
export type Result<T> = {
  code?: string
  msg: string
  result: T
}

/**通用分页参数类型 */
export type PageParams = {
  /**页码：默认值为 1 */
  page?: number
  /**页大小：默认值为 10 */
  pageSize?: number
}

/** 通用商品类型 */
export type GoodsItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
