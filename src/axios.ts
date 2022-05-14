import axios, { AxiosRequestConfig } from 'axios'

const defaultInstance = axios.create({
  baseURL: 'https://myapi.ku.th/',
  headers: {
    'app-key': 'txCR5732xYYWDGdd49M3R19o1OVwdRFc',
  },
})

export class AxiosInstance {
  constructor(private readonly instance = defaultInstance) {}

  async get<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const { data } = await this.instance.get<T>(url, config)
      return data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.message)
      } else {
        throw e
      }
    }
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const { data: resData } = await this.instance.post<T>(url, data, config)
      return resData
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.message)
      } else {
        throw e
      }
    }
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const { data: resData } = await this.instance.put<T>(url, data, config)
      return resData
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.message)
      } else {
        throw e
      }
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const { data } = await this.instance.delete<T>(url, config)
      return data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.message)
      } else {
        throw e
      }
    }
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const { data: resData } = await this.instance.patch<T>(url, data, config)
      return resData
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.message)
      } else {
        throw e
      }
    }
  }

  async options<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const { data } = await this.instance.options<T>(url, config)
      return data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.message)
      } else {
        throw e
      }
    }
  }

  setAccessToken(accessToken: string) {
    this.instance.defaults.headers.common['x-access-token'] = accessToken
  }
}
