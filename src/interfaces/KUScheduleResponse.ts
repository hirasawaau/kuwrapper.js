export interface KUSchedule {
  academicYr: number
  semester: number
}

export interface KUScheduleResponse {
  code: string
  cache: string
  results: KUSchedule[]
}
