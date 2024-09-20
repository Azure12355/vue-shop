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
