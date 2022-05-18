export interface KUSectionResult {
  sectionId: number
  subjectCode: string
  flagRegisCon: string
  subjectNameTh: string
  subjectNameEn: string
  maxCredit: number
  sectionCode: string
  sectionType: string
  sectionTypeTh: string
  sectionTypeEn: string
  studentStatusCode: string
  stdStatusTh: string
  stdStatusEn: string
  coursedate: string
  coursedateth: string
  coursedateen: string
  totalSeat: string
  totalRegistered: string
  teacherName: string
  teacherNameEn: string
  roomNameTh: string
  roomNameEn: string
  property?: any
  nonProperty?: any
  midternDate: string
  finalDate: string
  sectionStatus: string
  relateSubjectCode: string
}

export interface KUSectionResponse {
  code: string
  results: KUSectionResult[]
}
