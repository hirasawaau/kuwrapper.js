# kuwrapper.js

kuwrapper.js is a client instance for fetching data in my.ku.th like class schedule , grade history , gpax and other.

## Install

```bash
npm i kuwrapper
```

## Example [ES6]

### Create client by KU username and password

```ts
import { createClientInstance } from 'kuwrapper'
async function main() {
  const client = await createClientInstance('username', 'password')

  // Fetch Class Schedule
  const schedule = await client.getClassSchedule()
  return schedule
}

// Call function then console.log
main().then(console.log)
```

### Create client by custom payload

```ts
import { createClientInstance, PersonalPayload } from 'kuwrapper'
async function main() {
  const payload = new PersonalPayload(accessToken)
    .setUserType('user_type')
    .setStudentStatusCode('student_status_code')
    .export()
  const client = await createClientInstance(payload)

  // Fetch Class Schedule
  const schedule = await client.getClassSchedule()
  return schedule
}
```
