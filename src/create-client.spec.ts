import { AxiosInstance } from './axios'
import { KUClientInstance } from './client'
import { createClientInstance } from './create-client'
import { KULoginResponse } from './interfaces'

describe('createClientInstance', () => {
  const initFunction = jest
    .spyOn(KUClientInstance.prototype, 'init')
    .mockReturnThis()
  describe('from Authentication', () => {
    it('should post to myapi.ku.th/auth/login with correct data and call init function', async () => {
      const mockedPost = jest
        .spyOn(AxiosInstance.prototype, 'post')
        .mockResolvedValue(null)
      const username = 'username'
      const password = 'password'
      await createClientInstance(username, password)

      expect(mockedPost).toHaveBeenCalledWith('/auth/login', {
        username,
        password,
      })

      expect(initFunction).toHaveBeenCalled()
    })
  })

  describe('from Response', () => {
    it('should not post to myapi.ku.ac.th/auth/login', async () => {
      const mockedPost = jest
        .spyOn(AxiosInstance.prototype, 'post')
        .mockResolvedValue(null)
      const response = new KULoginResponse()
      await createClientInstance(response)

      expect(mockedPost).toHaveBeenCalled()
    })

    it('should call init function', async () => {
      await createClientInstance(new KULoginResponse())

      expect(initFunction).toBeCalled()
    })
  })
})
