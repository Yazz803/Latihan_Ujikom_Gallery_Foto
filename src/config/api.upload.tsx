import { myConst } from '../constants'

const { message } = require('antd')
const { default: axios } = require('axios')

let API_URL = myConst.baseUrlBE

const host = axios.create({
  baseURL: API_URL,
})

let token: string | null = ''
if (typeof window !== 'undefined') {
  token = localStorage.getItem(myConst.tokenName)
}

host.interceptors.request.use(
  (config: { headers: { [x: string]: any } }) => {
    config.headers['Content-Type'] = 'multipart/form-data'
    config.headers['api-token'] = token ?? ''
    config.headers['ngrok-skip-browser-warning'] = '69420'
    return config
  },
  (error: any) => {
    // eslint-disable-next-line no-undef
    Promise.reject(error)
  },
)

const apiUpload = {
  postRequest: async (url: string, params: any) => {
    let res = await host.post(url, params)
    if (res.data.success == false) {
      message.error(res.data.message)
    }
    return res.data
  },
  putRequest: async (url: string, params: any) => {
    let res = await host.put(url, params)
    if (res.data.success == false) {
      message.error(res.data.message)
    }
    return res.data
  },
  patchRequest: async (url: string, params: any) => {
    let res = await host.patch(url, params)
    if (res.data.success == false) {
      message.error(res.data.message)
    }
    return res.data
  },
}

export default apiUpload
