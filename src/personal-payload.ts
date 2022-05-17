import {
  KULoginResponse,
  KUStudentInfo,
  KUUser,
} from './interfaces/KULoginResponse'

export class PersonalPayload {
  private readonly loginResponse: KULoginResponse = new KULoginResponse()

  /**
   * Create custom payload for KU client
   * You can create own payload for use in KU client only required field.
   * @example
   * const loginResponse = new PersonalPayload(accessToken).setUserType('1').export()
   * const client = await createClientInstance(loginResponse)
   * @param accessToken KU's access token
   *
   */
  constructor(accessToken: string) {
    this.loginResponse.user = new KUUser()
    this.loginResponse.accesstoken = accessToken
    this.loginResponse.user.student = new KUStudentInfo()
  }

  setAccessToken(token: string) {
    this.loginResponse.accesstoken = token
    return this
  }

  setUserType(type: string) {
    this.loginResponse.user.userType = type
    return this
  }

  setStudentStatusCode(code: string) {
    this.loginResponse.user.student.studentStatusCode = code
    return this
  }

  setFacultyCode(code: string) {
    this.loginResponse.user.student.facultyCode = code
    return this
  }

  setCampusCode(code: string) {
    this.loginResponse.user.student.campusCode = code
    return this
  }

  setMajorCode(code: string) {
    this.loginResponse.user.student.majorCode = code
    return this
  }

  setStdId(id: string) {
    this.loginResponse.user.student.stdId = id
    return this
  }

  export(): KULoginResponse {
    return this.loginResponse
  }
}
