/**
 * 首页-广告区域数据类型
 */
export type BannerItem = {
  /**跳转链接 */
  hrefUrl: string
  /**id */
  id: string
  /**图片链接 */
  imgUrl: string
  /**跳转类型 */
  type: number
}

/**
 * 首页-分类区域数据类型
 */
export type CategoryItem = {
  /**id */
  id: string
  /**分类名字 */
  name: string
  /**图标链接 */
  icon: string
}

/** 首页-热门推荐数据类型 */
export type HotItem = {
  /** 说明 */
  alt: string
  /** id */
  id: string
  /** 图片集合[ 图片路径 ] */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 标题 */
  title: string
  /** 推荐类型 */
  type: string
}

/**
 * 猜你喜欢-商品类型
 */
export type GuessItem = {
  /**商品描述 */
  desc: string
  /**id */
  id: string
  /**名字 */
  name: string
  /**排序 */
  orderNum: number
  /**图片地址 */
  picture: string
  /**价格 */
  price: string
}
