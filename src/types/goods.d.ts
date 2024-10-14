/**商品详情 */
export type GoodsDetails = {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  brand: Brand
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: string[]
  videoScale: number
  mainPictures: string[]
  specs: Spec[]
  skus: Sku[]
  categories: Category[]
  details: Details
  isPreSale: boolean
  isCollect: null
  recommends: null
  userAddresses: null
  evaluationInfo: null
  similarProducts: SimilarProducts[]
  hotByDay: HotByDay[]
}

/**品牌信息 */
export type Brand = {
  id: string
  name: string
  nameEn: string
  picture: string
  logo: string
  type: string
  desc: string
  place: string
}

/**商品规格 */
export type Spec = {
  id: string
  name: string
  values: SpecValue[]
}

/**商品规格可选值 */
export type SpecValue = {
  name: string
  picture: string | null
  available: boolean
  desc: string
}

/**商品sku */
export type Sku = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: string
  picture: string
  specs: SkuSpec[]
}

/**商品sku中的spec */
export type SkuSpec = {
  name: string
  valueName: string
}

/**商品分类 */
export type Category = {
  id: string
  name: string
  layer: number
  parent: Category | null
}

/**详情 */
export type Details = {
  properties: Array<{
    name: string
    value: string
  }>
  pictures: string[]
}

/**同类产品 */
export type SimilarProducts = {
  id: string
  picture: string
  name: string
  price: string
  desc: string
  orderNum: string
  discount: string
}

/**24小时热卖 */
export type HotByDay = {
  id: string
  picture: string
  name: string
  price: string
  desc: string
  orderNum: number
  discount: null
}
