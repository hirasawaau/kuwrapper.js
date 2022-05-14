export class KUStdPersonalModel {
  stdId: string

  idCardCode: string

  passport_no?: any

  genderCode: string

  genderTh: string

  genderEn: string

  nameTh: string

  nameEn: string

  birthDate: Date

  nationCode: string

  nationNameTh: string

  nationNameEn: string

  religionTh: string

  religionEn: string

  phone: string

  email: string

  fatherPersonIdCode: string

  fatherNameTh: string

  fatherNameEn: string

  fatherNationNameTh: string

  fatherNationNameEn: string

  fatherReligionTh: string

  fatherReligionEn: string

  fatherPhone?: any

  fatherEmail: string

  motherPersonIdCode: string

  motherNameTh: string

  motherNameEn: string

  motherNationNameTh: string

  motherNationNameEn: string

  motherReligionTh: string

  motherReligionEn: string

  motherPhone?: any

  motherEmail: string

  attenedDate: Date

  entranceTh: string

  entranceEn: string

  projectName: string

  authWelfare: string

  libBarcode: string

  deformTh?: any

  deformEn: string
}

export class KUStudentInfoResult {
  stdPersonalModel: KUStdPersonalModel
}

export class KUStudentInfoResponse {
  code: string

  message: string

  results: KUStudentInfoResult

  cache: boolean
}
