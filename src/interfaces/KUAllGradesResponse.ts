export class KUGrade {
  std_code: string
  std_id: string
  subject_code: string
  subject_name_th: string
  subject_name_en: string
  credit: number
  grade: string
  registration_year: number
  registration_semester: number
  rownum: string
  grouping_data: string
  gpa?: number
  cr?: number
}

export class KUAllGradeResult {
  academicYear: string
  gpa?: number
  cr?: number
  grade: KUGrade[]
}

export class KUAllGradeResponse {
  code: string
  results: KUAllGradeResult[]
  cache: boolean
}
