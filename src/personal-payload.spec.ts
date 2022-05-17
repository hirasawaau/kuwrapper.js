import { PersonalPayload } from './personal-payload'

describe('Personal Payload', () => {
  const personalPayload = new PersonalPayload('')

  it('should set access token', () => {
    personalPayload.setAccessToken('token')
    expect(personalPayload['loginResponse'].accesstoken).toBe('token')
  })

  it('should set user type', () => {
    personalPayload.setUserType('1')
    expect(personalPayload['loginResponse'].user.userType).toBe('1')
  })

  it('should set student status code', () => {
    personalPayload.setStudentStatusCode('1')
    expect(
      personalPayload['loginResponse'].user.student.studentStatusCode,
    ).toBe('1')
  })

  it('should set faculty code', () => {
    personalPayload.setFacultyCode('1')
    expect(personalPayload['loginResponse'].user.student.facultyCode).toBe('1')
  })

  it('should set campus code', () => {
    personalPayload.setCampusCode('1')
    expect(personalPayload['loginResponse'].user.student.campusCode).toBe('1')
  })

  it('should set major code', () => {
    personalPayload.setMajorCode('1')
    expect(personalPayload['loginResponse'].user.student.majorCode).toBe('1')
  })

  it('should set std id', () => {
    personalPayload.setStdId('1')
    expect(personalPayload['loginResponse'].user.student.stdId).toBe('1')
  })

  it('should export', () => {
    expect(personalPayload.export()).toEqual(personalPayload['loginResponse'])
  })
})
