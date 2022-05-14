# kuwrapper.js

kuwrapper.js is a client instance for fetching data in my.ku.th like class schedule , grade history , gpax and other.

## Install

```bash
npm i kuwrapper
```

## Example

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
