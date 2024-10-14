import { createSSRApp } from "vue"
import pinia from "./stores"

import App from "./App.vue"
import HttpUtil from "./utils/HttpUtil"
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)

  //创建HttpUtil实例并设置拦截器
  new HttpUtil().setUniInterceptor()

  return {
    app,
  }
}
