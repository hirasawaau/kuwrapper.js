import axios, { AxiosError } from 'axios'
import { AxiosInstance } from './axios'

describe('AxiosInstance', () => {
  let instance: AxiosInstance
  let axiosInstance: ReturnType<typeof axios.create>

  beforeEach(() => {
    axiosInstance = axios.create()
    instance = new AxiosInstance(axiosInstance)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('get', () => {
    it('should axiosInstance.get be called with correct parameter', async () => {
      axiosInstance.get = jest.fn().mockResolvedValue({ data: null })
      await instance.get('/test')
      expect(axiosInstance.get).toBeCalledWith('/test', undefined)
    })

    it('should error if axiosInstance.get throw error', async () => {
      axiosInstance.get = jest.fn().mockRejectedValue(new Error('test'))
      await expect(instance.get('/test')).rejects.toThrow(Error)
    })

    it('should throw errror if axiosInstance.get throw AxiosError', async () => {
      axiosInstance.get = jest.fn().mockRejectedValue(new AxiosError('test'))
      await expect(instance.get('/test')).rejects.toThrow(Error)
    })

    it('should return data if axiosInstance.get success', async () => {
      axiosInstance.get = jest.fn().mockResolvedValue({ data: 'test' })
      const data = await instance.get('/test')
      expect(data).toBe('test')
    })
  })

  describe('post', () => {
    it('should axiosInstance.post be called with correct parameter', async () => {
      axiosInstance.post = jest.fn().mockResolvedValue({ data: null })
      await instance.post('/test')
      expect(axiosInstance.post).toBeCalledWith('/test', undefined, undefined)
    })

    it('should error if axiosInstance.post throw error', async () => {
      axiosInstance.post = jest.fn().mockRejectedValue(new Error('test'))
      await expect(instance.post('/test')).rejects.toThrow(Error)
    })

    it('should throw errror if axiosInstance.post throw AxiosError', async () => {
      axiosInstance.post = jest.fn().mockRejectedValue(new AxiosError('test'))
      await expect(instance.post('/test')).rejects.toThrow(Error)
    })

    it('should return data if axiosInstance.post success', async () => {
      axiosInstance.post = jest.fn().mockResolvedValue({ data: 'test' })
      const data = await instance.post('/test')
      expect(data).toBe('test')
    })
  })

  describe('put', () => {
    it('should axiosInstance.put be called with correct parameter', async () => {
      axiosInstance.put = jest.fn().mockResolvedValue({ data: null })
      await instance.put('/test')
      expect(axiosInstance.put).toBeCalledWith('/test', undefined, undefined)
    })

    it('should error if axiosInstance.put throw error', async () => {
      axiosInstance.put = jest.fn().mockRejectedValue(new Error('test'))
      await expect(instance.put('/test')).rejects.toThrow(Error)
    })

    it('should throw errror if axiosInstance.put throw AxiosError', async () => {
      axiosInstance.put = jest.fn().mockRejectedValue(new AxiosError('test'))
      await expect(instance.put('/test')).rejects.toThrow(Error)
    })

    it('should return data if axiosInstance.put success', async () => {
      axiosInstance.put = jest.fn().mockResolvedValue({ data: 'test' })
      const data = await instance.put('/test')
      expect(data).toBe('test')
    })
  })

  describe('delete', () => {
    it('should axiosInstance.delete be called with correct parameter', async () => {
      axiosInstance.delete = jest.fn().mockResolvedValue({ data: null })
      await instance.delete('/test')
      expect(axiosInstance.delete).toBeCalledWith('/test', undefined)
    })

    it('should error if axiosInstance.delete throw error', async () => {
      axiosInstance.delete = jest.fn().mockRejectedValue(new Error('test'))
      await expect(instance.delete('/test')).rejects.toThrow(Error)
    })

    it('should throw errror if axiosInstance.delete throw AxiosError', async () => {
      axiosInstance.delete = jest.fn().mockRejectedValue(new AxiosError('test'))
      await expect(instance.delete('/test')).rejects.toThrow(Error)
    })

    it('should return data if axiosInstance.delete success', async () => {
      axiosInstance.delete = jest.fn().mockResolvedValue({ data: 'test' })
      const data = await instance.delete('/test')
      expect(data).toBe('test')
    })
  })

  describe('patch', () => {
    it('should axiosInstance.patch be called with correct parameter', async () => {
      axiosInstance.patch = jest.fn().mockResolvedValue({ data: null })
      await instance.patch('/test')
      expect(axiosInstance.patch).toBeCalledWith('/test', undefined, undefined)
    })

    it('should error if axiosInstance.patch throw error', async () => {
      axiosInstance.patch = jest.fn().mockRejectedValue(new Error('test'))
      await expect(instance.patch('/test')).rejects.toThrow(Error)
    })

    it('should throw errror if axiosInstance.patch throw AxiosError', async () => {
      axiosInstance.patch = jest.fn().mockRejectedValue(new AxiosError('test'))
      await expect(instance.patch('/test')).rejects.toThrow(Error)
    })

    it('should return data if axiosInstance.patch success', async () => {
      axiosInstance.patch = jest.fn().mockResolvedValue({ data: 'test' })
      const data = await instance.patch('/test')
      expect(data).toBe('test')
    })
  })

  describe('options', () => {
    it('should axiosInstance.options be called with correct parameter', async () => {
      axiosInstance.options = jest.fn().mockResolvedValue({ data: null })
      await instance.options('/test')
      expect(axiosInstance.options).toBeCalledWith('/test', undefined)
    })

    it('should error if axiosInstance.options throw error', async () => {
      axiosInstance.options = jest.fn().mockRejectedValue(new Error('test'))
      await expect(instance.options('/test')).rejects.toThrow(Error)
    })

    it('should throw errror if axiosInstance.options throw AxiosError', async () => {
      axiosInstance.options = jest
        .fn()
        .mockRejectedValue(new AxiosError('test'))
      await expect(instance.options('/test')).rejects.toThrow(Error)
    })

    it('should return data if axiosInstance.options success', async () => {
      axiosInstance.options = jest.fn().mockResolvedValue({ data: 'test' })
      const data = await instance.options('/test')
      expect(data).toBe('test')
    })
  })

  describe('setAccessToken', () => {
    it('should x-access-token be set with correct value', () => {
      instance.setAccessToken('test')
      expect(axiosInstance.defaults.headers.common['x-access-token']).toBe(
        'test',
      )
    })
  })
})
