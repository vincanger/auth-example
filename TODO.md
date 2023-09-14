[x] - Add query `getFinishedTasks` to `main.wasp`

```js
query getFinishedTasks {
  fn: import { getFinishedTasks } from "@server/queries.js",
  entities: [Task]
}
```

  - show function in `queries.ts`

  - import useQuery to MainPage.tsx

```js 
import { useQuery } from '@wasp/queries';
import getFinishedTasks from '@wasp/queries/getFinishedTasks';
```

```js
const { data: finishedTasks } = useQuery(getFinishedTasks);
```

