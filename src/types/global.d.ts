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

/**通用分页参数类型 */
export type PageParams = {
  /**页码：默认值为 1 */
  page?: number
  /**页大小：默认值为 10 */
  pageSize?: number
}
