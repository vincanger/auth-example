import { Input, HStack, Text, Checkbox, Button as CButton } from '@chakra-ui/react';
import Button from './components/Button';
import MainLayout from './MainLayout';
import React, { useState } from 'react';

const MainPage = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      description: 'Task 1',
      isDone: false,
      userId: 1,
    },
  ]);

  const handleNewTask = (newTask: Task) => setTasks([...tasks, newTask]);

  return (
    <MainLayout>
      <NewTaskForm createTask={handleNewTask} />

      {tasks && tasks.map((tsk) => <Todo {...tsk} key={tsk.id} />)}
    </MainLayout>
  );
};
export default MainPage;

function Todo({ id, isDone, description }: Task) {
  return (
    <HStack
      alignItems={'center'}
      bgColor='purple.50'
      borderRadius='lg'
      border='1px solid rgba(0, 0, 0, 0.11)'
      p={2}
      w='full'
    >
      <Checkbox checked={isDone} onChange={async (e) => console.log('!!!!')} />
      <Text ml={2}>{description}</Text>
      {/* {isDone && (
        <CButton size={'xs'} variant='unstyled' onClick={() => deleteTask({ taskId: id })}>
          '❌'
        </CButton>
      )} */}
    </HStack>
  );
}

function NewTaskForm({ createTask }: { createTask: any }) {
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async () => {
    try {
      createTask({
        id: 3,
        description,
        isDone: false,
        userId: 1,
      });
    } catch (err: any) {
      window.alert('Error: ' + err?.message);
    }
  };

  return (
    <HStack gap={1} w='full'>
      <Input
        id='description'
        autoComplete='description'
        fontSize={'sm'}
        textColor={'gray.600'}
        mr={2}
        w={'full'}
        borderRadius={'0.5rem'}
        border={'1px solid rgba(0, 0, 0, 0.1)'}
        bg='#f5f0ff !important'
        boxShadow={'md'}
        _focus={{
          boxShadow: 'none !important',
          borderColor: 'transparent',
        }}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmit} minWidth={'7rem'}>
        {'Add Task'}
      </Button>
    </HStack>
  );
}

export type Task = {
  id: number;
  description: string;
  isDone: boolean;
  userId: number | null;
};
