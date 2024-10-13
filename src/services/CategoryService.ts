import type { MainCateogry } from "@/types/category"
import type { Result } from "@/types/global"
import HttpUtil from "@/utils/HttpUtil"

export default class CategoryService {
  public static getCategoryListAPI = (): Promise<Result<MainCateogry[]>> => {
    return HttpUtil.http<MainCateogry[]>({
      method: "GET",
      url: "/category/top",
    })
  }
}
