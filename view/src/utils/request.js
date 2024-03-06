import axios from 'axios'
import { Message, Loading } from 'element-ui'
// import { login } from '@/utils/login'
// eslint-disable-next-line
// import store from '@/store'
/**
 * 支持传参
 * url
 * method
 * data
 * options
 *    - maskFlag
 */

// loading实例
let loadingInstance
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 120000, // 请求超时时间
  withCredentials: true
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    const options = { maskFlag: true, ...config.options }
    if (options.maskFlag) {
      loadingInstance = Loading.service({
        lock: true,
        background: 'rgba(255, 255, 255, 0.5)'
      })
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers.Accept = 'application/json'
    // config.headers.userAccount = store.state.user.account
    return config
  },
  (error) => {
    // Do something with request error
    console.log(error) // for debug
    if (loadingInstance) loadingInstance.close()
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const options = { maskFlag: true, ...response.config.options }
    if (loadingInstance && options.maskFlag) loadingInstance.close()
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (options.callBack) {
      return options.callBack(res)
    }
    if (res.code !== 'success') {
      console.log('sdsadas')
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject()
    }
    return response.data
  },
  (error) => {
    console.log('err', error) // for debug
    if (loadingInstance) loadingInstance.close()
    if (!!window.ActiveXObject || 'ActiveXObject' in window) return
    if (error.response && error.response.status === 401) {
      // login()
      return
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject()
  }
)

export default service
