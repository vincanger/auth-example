import './Main.css';
import { Input, HStack, Button as CButton} from '@chakra-ui/react';
import React, { useEffect, FormEventHandler, FormEvent } from 'react';
import MainLayout from './MainLayout';
import Button from './components/Button';

/** 😎 WASP AUTH 🔐 */
import useAuth from '@wasp/auth/useAuth';
import logout from '@wasp/auth/logout.js';

/** 💪 WASP OPERATIONS 🥼 */
import { useQuery } from '@wasp/queries'; // Wasp uses a thin wrapper around react-query
import getTasks from '@wasp/queries/getTasks';
import createTask from '@wasp/actions/createTask';
import updateTask from '@wasp/actions/updateTask';
import deleteTask from '@wasp/actions/deleteTask';

const MainPage = () => {
  // const { data: user } = useAuth();
  const { data: tasks, isLoading } = useQuery<unknown, Task[]>(getTasks);

  if (isLoading) return 'Loading...';

  return (
    <MainLayout>
      <NewTaskForm />

      {/* {tasks && <TasksList tasks={tasks} />} */}

      <Button onClick={logout}>Logout</Button>
    </MainLayout>
  );
};
export default MainPage;

function Todo({ id, isDone, description }: Task) {
  const handleIsDoneChange: FormEventHandler<HTMLInputElement> = async (event) => {
    try {
      console.log(typeof id)
      await updateTask({
        taskId: id,
        isDone: event.currentTarget.checked,
      });
    } catch (err: any) {
      window.alert('Error while updating task ' + err?.message);
    }
  };

  return (
    <li>
      <input
        type='checkbox'
        className='form-checkbox text-purple-500 focus:ring-0'
        id={`checkbox-${id}`}
        checked={isDone}
        // onChange={!isDone ? (event) => handleIsDoneChange(event) : () => deleteTask({ taskId: id })}
        onChange={handleIsDoneChange}
      />
      <label htmlFor={`checkbox-${id}`} className={isDone ? 'line-through' : ''}>
        {' ' + description}
      </label>
      {isDone && <CButton
        size={'xs'}
        variant='unstyled'
        onClick={() => deleteTask({ taskId: id })}
      >
        ❌
      </CButton>}

    </li>
  );
}

function TasksList({ tasks }: { tasks: Task[] }) {
  console.log(tasks.map((task) => task.isDone));
  if (tasks.length === 0) return <p>No tasks yet.</p>;
  return (
    <ol className='tasklist'>
      {tasks.map((tsk) => (
        <Todo {...tsk} key={tsk.id} />
      ))}
    </ol>
  );
}

function NewTaskForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const description = event.currentTarget.description.value;
      console.log(description);
      event.currentTarget.reset();
      await createTask({ description });
    } catch (err: any) {
      window.alert('Error: ' + err?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack gap={1} >
        <Input
          id='description'
          name='description'
          type='text'
          autoComplete='description'
          fontSize={'sm'}
          textColor={'gray.600'}
          borderRadius={'0.5rem'}
          border={'1px solid gray'}
          bg='#f5f0ff !important'
          _focus={{
            boxShadow: 'none !important',
            borderColor: 'transparent',
          }}
          boxShadow={'sm'}
        />
        <input type={'submit'} style={{ display: 'none' }}/>
          <Button onClick={()=> ''} minWidth={'7rem'}>
            {'Add Task'}
          </Button>
      </HStack>
    </form>
  );
}

export type Task = {
  id: number;
  description: string;
  isDone: boolean;
  userId: number | null;
};
