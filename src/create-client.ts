import { AxiosInstance } from './axios'
import { KUClientInstance } from './client'
import { UserInputError } from './errors/user-input'
import { KULoginResponse } from './interfaces'

/**
 * Create a KU Client Instance By Authenticating with my.ku.th
 * @param username Username that use for my.ku.th e.g 'bxxxxxxxxxx'
 * @param password Password that use for my.ku.th
 * @returns KU Client Instance
 * @example
 * import { createClientInstance } from 'kuwrapper'
 * // In async function
 * const instance = await createClientInstance('username', 'password')
 */

export function createClientInstance(
  username: string,
  password: string,
): Promise<KUClientInstance>

/**
 * Create a KU Client Instance By Response from Authenticating
 * @param loginResponse Login Response from my.ku.th
 * @returns KU Client Instance
 * @example
 * import { createClientInstance } from 'kuwrapper'
 * // In async function
 * const instance = await createClientInstance(loginResponse)
 */
export function createClientInstance(
  loginResponse: KULoginResponse,
): Promise<KUClientInstance>

export async function createClientInstance(
  arg1: string | KULoginResponse,
  arg2?: string,
): Promise<KUClientInstance> {
  const axiosInstance = new AxiosInstance()
  if (typeof arg1 === 'string') {
    const data = await axiosInstance
      .post<KULoginResponse>('/auth/login', {
        username: arg1,
        password: arg2,
      })
      .catch(() => {
        throw new UserInputError('Invalid username or password')
      })

    return new KUClientInstance(data).init()
  }

  return new KUClientInstance(arg1).init()
}
