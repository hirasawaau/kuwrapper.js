export interface Schedule {
  day: string
  timeFrom: number
  timeTo: number
  time: string
  room: string
}

export interface KUTeacher {
  title: string
  titleEn: string
  positionTh: string
  positionEn: string
  nameTh: string
  nameEn: string
}

export interface KUSectionDetail {
  schedules: Schedule[]
  teacher: KUTeacher[]
  major: string[]
  exmajor: string[]
  midterm?: string
  final?: string
}

export interface KUSectionDetailResponse {
  code: string
  sectionDetail: KUSectionDetail
}
