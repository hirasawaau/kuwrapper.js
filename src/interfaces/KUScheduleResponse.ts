export class KUSchedule {
  academicYr: number
  semester: number
}

export class KUScheduleResponse {
  code: string
  cache: string
  results: KUSchedule[]
}
