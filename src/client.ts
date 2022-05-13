import axios from 'axios'
import { KUClassScheduleResponse } from './interfaces/KUClassScheduleResponse'
import { KULoginResponse } from './interfaces/KULoginResponse'
import { KUScheduleResponse } from './interfaces/KUScheduleResponse'

const defaultInstance = axios.create({
  baseURL: 'https://myapi.ku.th/',
  headers: {
    'app-key': 'txCR5732xYYWDGdd49M3R19o1OVwdRFc',
  },
})

export class KUClientInstance {
  private readonly axiosInstance = defaultInstance
  private semester: number
  private academicYear: number

  private constructor(private readonly loginResponse: KULoginResponse) {}

  private async init() {
    this.axiosInstance.defaults.headers.common['x-access-token'] =
      this.loginResponse.accesstoken

    const schedules = await this.getSchedules()
    this.semester = schedules?.[0].semester ?? 0
    this.academicYear = schedules?.[0].academicYr ?? 0

    return this
  }

  /**
   * Get Current Schedules
   * API: GET https://myapi.ku.th/common/getschedule
   *
   * @returns Current Semester And Course
   */

  async getSchedules() {
    const {
      studentStatusCode: stdStatusCode,
      campusCode,
      facultyCode,
      majorCode,
    } = this.loginResponse.user.student

    try {
      const { data } = await this.axiosInstance.get<KUScheduleResponse>(
        '/common/getschedule',
        {
          params: {
            userType: this.loginResponse.user.userType,
            stdStatusCode,
            campusCode,
            facultyCode,
            majorCode,
          },
        },
      )

      return data.results
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.message)
      }
    }
  }

  async getClassSchedule() {
    try {
      const { data } = await this.axiosInstance.get<KUClassScheduleResponse>(
        '/std-profile/getGroupCourse',
        {
          params: {
            academicYear: this.academicYear,
            semester: this.semester,
            stdId: this.loginResponse.user.student.stdId,
          },
        },
      )

      return data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new Error(e.message)
      }
    }
  }

  /**
   * Create KU Client Instance From My KU's Authentication
   * @param username KU Username e.g. 'bxxxxxxxxxx'
   * @param password KU Password
   * @returns KU Client Instance
   */
  static async createFromAuth(username: string, password: string) {
    const { data } = await defaultInstance.post<KULoginResponse>(
      '/auth/login',
      { username, password },
    )

    return new KUClientInstance(data).init()
  }

  /**
   * Create KU Client Instance From My KU's Login Response
   * @param loginResponse KU Login Response
   */

  static createFromLoginResponse(loginResponse: KULoginResponse) {
    return new KUClientInstance(loginResponse).init()
  }
}
