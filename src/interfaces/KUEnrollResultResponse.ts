export class EnrollSubject {
  enrollId: number
  sectionId: number
  subjectCode: string
  subjectShow: string
  subjectNameTh: string
  subjectNameEn: string
  credit: number
  creditShow: string
  sectionCode: string
  sectionType: string
  sectionTypeTh: string
  sectionTypeEn: string
  enrollStatus: string
  approveStatus: string
  approveBy?: any
  approveDt?: any
  enrollType: string
  enrollTypeTh: string
  enrollTypeEn: string
  subjectType: string
  isPreRegister?: any
  campusCode: string
  campusNameTh: string
  campusNameEn: string
  inchangeprocess: string
}

export class KUEnrollResultResponse {
  code: string
  yearTh: string
  yearEn: string
  semester: string
  semesterTh: string
  semesterEn: string
  enrollCredit: number
  enrollSubjects: EnrollSubject[]
  waitApproveCredit: number
  waitApproveSubjects: any[]
  rejectCredit: number
  rejectSubjects: any[]
  patternCredit: number
  patternSubjects: any[]
  patternFlag: string
}
