import axios from 'axios'
import { AxiosInstance } from './axios'
import { KUClientInstance } from './client'
import { KULoginResponse, KUStudentInfo, KUUser } from './interfaces'

jest.mock('./axios', () => ({
  AxiosInstance: jest.fn().mockReturnValue({
    post: jest.fn(),
    get: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    patch: jest.fn(),
    setAccessToken: jest.fn(),
  }),
}))

describe('KuClientInstance', () => {
  let instance: KUClientInstance
  let axiosInstance: AxiosInstance
  let response: KULoginResponse

  beforeEach(() => {
    response = new KULoginResponse()
    response.user = new KUUser()
    response.user.student = new KUStudentInfo()
    response.user.userType = '1'
    response.user.student.studentStatusCode = '1'
    response.user.student.campusCode = '1'
    response.user.student.facultyCode = '1'
    response.user.student.majorCode = '1'

    instance = new KUClientInstance(response)
    axiosInstance = new AxiosInstance()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('init', () => {
    it('should getSchedules be called for fetch current semester and year', async () => {
      instance.getSchedules = jest.fn()
      await instance.init()
      expect(instance.getSchedules).toBeCalled()
    })

    it('should setAccessToken be called for set access token to axios', async () => {
      instance.getSchedules = jest.fn()
      await instance.init()
      expect(axiosInstance.setAccessToken).toBeCalled()
    })
  })

  describe('getSchedules', () => {
    it('should post to myapi.ku.th/common/getschedule with correct data', async () => {
      await instance.getSchedules()

      const {
        studentStatusCode: stdStatusCode,
        campusCode,
        facultyCode,
        majorCode,
      } = response.user.student

      expect(axiosInstance.get).toHaveBeenCalledWith('/common/getschedule', {
        params: {
          userType: response.user.userType,
          stdStatusCode,
          campusCode,
          facultyCode,
          majorCode,
        },
      })
    })
  })

  describe('getClassSchedule', () => {
    it('should post to myapi.ku.th/std-profile/getGroupCourse with correct data', async () => {
      const semester = instance['semester']
      const academicYear = instance['academicYear']
      await instance.getClassSchedule()

      expect(axiosInstance.get).toHaveBeenCalledWith(
        '/std-profile/getGroupCourse',
        {
          params: {
            academicYear,
            semester,
            stdId: response.user.student.stdId,
          },
        },
      )
    })
  })

  describe('getRegisteredCourses', () => {
    it('should post to myapi.ku.th/enroll/searchEnrollResult with correct data', async () => {
      await instance.getRegisteredCourses()
      expect(axiosInstance.post).toHaveBeenCalledWith(
        '/enroll/searchEnrollResult',
        {
          academicYear: instance['academicYear'].toString(),
        },
      )
    })
  })

  describe('getInformation', () => {
    it('should get to myapi.ku.th/std-profile/getStdPersonal with correct data', async () => {
      await instance.getInformation()
      expect(axiosInstance.get).toHaveBeenCalledWith(
        '/std-profile/getStdPersonal',
        {
          params: {
            stdId: response.user.student.stdId,
          },
        },
      )
    })
  })

  describe('getAllGrades', () => {
    it('should get to myapi.ku.th/std-profile/checkGrade with correct data', async () => {
      await instance.getAllGrades()
      expect(axiosInstance.get).toHaveBeenCalledWith(
        '/std-profile/checkGrades',
        {
          params: {
            idCode: response.user.student.stdCode,
          },
        },
      )
    })
  })

  describe('getGpax', () => {
    it('should get to myapi.ku.th/stddashboard/gpax with correct data', async () => {
      await instance.getGpax()
      expect(axiosInstance.get).toHaveBeenCalledWith('/stddashboard/gpax', {
        params: {
          stdId: response.user.student.stdId,
        },
      })
    })
  })
})
