export class KUGpaxResult {
  std_id: number

  std_code: string

  gpax: number

  total_credit: number
}

export class KUGpaxResponse {
  code: string

  results: KUGpaxResult[]
}
