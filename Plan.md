```js

app todoList {
  title: 'Todo List',
  auth: GitHub,

  rootComponent: MainPage.tsx,

  databaseModels: {
    user: {
      id: Int,
      task: Task[]
    },
    task: {
      id: Int,
      desc: String,
      userId: user.id
    }
  },

  taskActions: ['getAll', 'create', 'update', 'delete'],
}

```