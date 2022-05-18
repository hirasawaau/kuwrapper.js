import { createClientInstance } from './create-client'
import 'dotenv/config'
async function main() {
  const instance = await createClientInstance(
    process.env.USERNAME ?? '',
    process.env.PASSWORD ?? '',
  )
  return instance.getSection('01355119-64', '1')
}

main().then(console.log)
