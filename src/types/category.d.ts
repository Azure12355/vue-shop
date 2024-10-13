import type { GoodsItem } from './global'

/**
 * 分类-一级分类
 */
export type MainCateogry = {
  /**id */
  id: string
  /**一级分类名 */
  name: string
  /**一级分类图片 */
  picture: string
  /**一级分类图片集 */
  imageBanners: string[]
  /**二级分类 */
  children: ChildCategory[]
}

/**
 * 分类-二级分类
 */
export type ChildCategory = {
  /**id */
  id: string
  /**二级分类名 */
  name: string
  /**二级分类图片 */
  picture: string
  /**父分类ID */
  parentId: null
  /**父分类名称 */
  parentName: null
  /**商品集合 */
  godds: GoodsItem[]
  /**分类 */
  categories: null
  /**品牌 */
  brands: null
  /**售卖属性 */
  saleProperties: null
}
