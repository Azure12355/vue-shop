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

export type CategoryItem = {
  /**id */
  id: string
  /**分类名字 */
  name: string
  /**图标链接 */
  icon: string
}
