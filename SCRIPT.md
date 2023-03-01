- `wasp new TodoApp` && `cd TodoApp`
- `wasp start`
- add Task entity (copy+paste) -  `wasp db migrate-dev`
- `wasp db studio` open localhost:5555

- add `query getTasks` 
- create a new file `src/server/queries.js` and define the JS we've just used in the query declaration
- add logic to client. See: https://wasp-lang.dev/docs/tutorials/todo-app/03-listing-tasks#invoking-the-query-from-react 
  - "Wasp takes care of automatic cache invalidation" -- show wasp file again

- add User entity -  `wasp db migrate-dev` 
- Add auth Wasp declaration.  
- Add Login Route and Page
- add `authRequired` to MainPage route
- add `useAuth` hook to MainPage
  - display username 




