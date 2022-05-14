export class KUClassScheduleCourse {
  section_id: number

  groupheader: string

  weekstartday: Date

  weekendday: Date

  std_id: string

  subject_code: string

  subject_name_th: string

  subject_name_en: string

  section_code: string

  section_type: string

  section_type_th: string

  section_type_en: string

  student_status_code: string

  std_status_th: string

  std_status_en: string

  teacher_name: string

  teacher_name_en: string

  day_w_c: string

  time_from: string

  time_to: string

  day_w: string

  room_name_th: string

  room_name_en: string

  time_start: number
}

export class KUClassScheduleResult {
  peroid_date: string

  course: KUClassScheduleCourse[]
}

export class KUClassScheduleResponse {
  code: string

  results: KUClassScheduleResult[]

  cache: boolean
}
