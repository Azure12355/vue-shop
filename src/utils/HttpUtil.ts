import { useMemberStore } from '@/stores/modules/member'
import type Result from '@/model/result/Result'

/**
 * @description Http相关工具类
 */
export default class HttpUtil {
  //网络请求的基地址
  private static BASE_URL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

  //uni的拦截器
  private uniInterceptor: UniNamespace.InterceptorOptions = {
    //请求拦截器
    invoke: (options: UniApp.RequestOptions) => {
      // 1.拼接基础地址
      if (!options.url.startsWith('http')) {
        options.url = HttpUtil.BASE_URL + options.url
      }
      // 2.请求超时, 设置成10s
      options.timeout = 1000
      // 3.添加小程序调用请求头
      options.header = {
        //保留实际配置的header, 避免被覆盖
        ...options.header,
        'source-client': 'miniapp',
      }
      // 4.添加 token 令牌
      this.setToken(options)
    },
  }

  /**
   * 设置token令牌
   * @param options 请求配置项
   */
  private setToken(options: UniApp.RequestOptions): void {
    const token = useMemberStore().profile?.token
    if (token) {
      options.header.Authorization = token
    } else {
      options.header.Authorization = 'test'
    }
  }

  /**
   * 设置请求拦截器
   * @returns void
   */
  public setUniInterceptor(): void {
    uni.addInterceptor('request', this.uniInterceptor)
    uni.addInterceptor('uploadFile', this.uniInterceptor)
    console.log('uni的拦截器设置成功!!!')
  }

  /**
   * 封装http请求用于发送网络请求
   * @param options 请求配置项
   * @returns 请求数据返回的实体类型
   */
  public static http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Result<T>>((resolve, reject) => {
      uni.request({
        ...options,

        //处理响应成功
        success(result) {
          //获取到响应结果后判断响应状态码
          if (result.statusCode >= 200 && result.statusCode < 300) {
            //获取数据成功, 调用resolve函数
            resolve(result.data as Result<T>)
          } else if (result.statusCode === 401) {
            //401错误, 调用reject
            useMemberStore().clearProfile()

            uni.showToast({
              icon: 'none',
              title: (result.data as Result<T>).msg || 'token令牌失效,请重新登录',
            })
            //跳转到登录界面
            uni.navigateTo({ url: '/pages/login/login' })
            reject(result)
          } else {
            //通用错误, 调用reject
            uni.showToast({
              title: (result.data as Result<T>).msg || '请求出错了',
              icon: 'none',
            })
            reject(result)
          }
        },

        //处理响应失败
        fail(err) {
          //网络错误
          uni.showToast({
            icon: 'none',
            title: '网络出错啦, 换个网络试试',
          })
          reject(err)
        },
      })
    })
  }
}
