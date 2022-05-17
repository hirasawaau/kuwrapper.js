import { AxiosInstance } from './axios'
import { KUAllGradeResponse } from './interfaces/KUAllGradesResponse'
import { KUClassScheduleResponse } from './interfaces/KUClassScheduleResponse'
import { KUEnrollResultResponse } from './interfaces/KUEnrollResultResponse'
import { KUGpaxResponse } from './interfaces/KUGpaxResponse'
import { KULoginResponse } from './interfaces/KULoginResponse'
import { KUScheduleResponse } from './interfaces/KUScheduleResponse'
import { KUStudentInfoResponse } from './interfaces/KUStudentInfoResponse'

export class KUClientInstance {
  private readonly axiosInstance = new AxiosInstance()

  private semester = 0

  private academicYear = 0

  /**
   * @hideconstructor This constructor should not be called directly. Use createClient instead.
   * @param loginResponse Login Response from my.ku.th
   */
  constructor(private readonly loginResponse: KULoginResponse) {}

  /**
   * Initialize KU client instance by set access token from login response and fetch current schedule
   * This function will be called in createFromAuth
   * @returns Initialized KU client instance
   * @example
   * const instance = await instance.init()
   */
  async init() {
    this.axiosInstance.setAccessToken(this.loginResponse.accesstoken)

    const schedules = await this.getSchedules()
    this.semester = schedules?.results?.[0].semester ?? 0
    this.academicYear = schedules?.results?.[0].academicYr ?? 0

    return this
  }

  /**
   * Get Current Schedules
   * API: GET https://myapi.ku.th/common/getschedule
   * @requires userType
   * @requires studentStatusCode
   * @requires campusCode
   * @requires facultyCode
   * @requires majorCode
   *
   * @returns Current Semester And Course
   */

  getSchedules() {
    const {
      studentStatusCode: stdStatusCode,
      campusCode,
      facultyCode,
      majorCode,
    } = this.loginResponse.user.student

    return this.axiosInstance.get<KUScheduleResponse>('/common/getschedule', {
      params: {
        userType: this.loginResponse.user.userType,
        stdStatusCode,
        campusCode,
        facultyCode,
        majorCode,
      },
    })
  }

  /**
   * Get All User's Schedule [Class/Exam Schedule]
   * API: GET https://myapi.ku.th/std-profile/getGroupCourse
   * @requires academicYear
   * @requires Semester
   * @requires stdId
   *
   * @returns Current Semester And Course
   */
  getClassSchedule() {
    return this.axiosInstance.get<KUClassScheduleResponse>(
      '/std-profile/getGroupCourse',
      {
        params: {
          academicYear: this.academicYear,
          semester: this.semester,
          stdId: this.loginResponse.user.student.stdId,
        },
      },
    )
  }

  /**
   * Get Approved,Wait for Approval and Rejected Enrollments
   *
   * API: POST https://myapi.ku.th/std-profile/getEnrollResults
   * @requires academicYear
   * @requires stdId
   * @requires semester
   * @returns Enroll Result Response
   */
  getRegisteredCourses() {
    const obj = {
      academicYear: this.academicYear.toString(),
      semester: this.semester.toString(),
      stdid: this.loginResponse.user.student.stdId,
    }

    return this.axiosInstance.post<KUEnrollResultResponse>(
      '/enroll/searchEnrollResult',
      obj,
    )
  }

  /**
   * Get GPAX And Credit Summary
   * API: GET https://myapi.ku.th/stddashboard/gpax
   * @requires stdId
   * @returns GPAX And Credit Summary
   */
  getGpax() {
    return this.axiosInstance.get<KUGpaxResponse>('/stddashboard/gpax', {
      params: {
        stdId: this.loginResponse.user.student.stdId,
      },
    })
  }

  /**
   * Get All Grades that User Has
   * @requires idCode
   * @returns All Grades
   */
  getAllGrades() {
    return this.axiosInstance.get<KUAllGradeResponse>(
      '/std-profile/checkGrades',
      {
        params: {
          idcode: this.loginResponse.user.idCode,
        },
      },
    )
  }

  /**
   * Get User Information
   * API: GET https://myapi.ku.th/std-profile/getStdPersonal
   * @requires stdId
   * @returns User Information
   */
  getInformation() {
    return this.axiosInstance.get<KUStudentInfoResponse>(
      '/std-profile/getStdPersonal',
      {
        params: {
          stdId: this.loginResponse.user.student.stdId,
        },
      },
    )
  }
}
