import { Input, HStack, Text, Checkbox, Button as CButton, Box } from '@chakra-ui/react';
import useReward from './components/useReward';
import Button from './components/Button';
import MainLayout from './MainLayout';
import React, { useState } from 'react';

import { Task } from '@wasp/entities';
import useAuth from '@wasp/auth/useAuth';
import { tasksCrud } from '@wasp/crud/tasksCrud';

import { useQuery } from '@wasp/queries';
import getFinishedTasks from '@wasp/queries/getFinishedTasks';

export default function MainPage() {
  useReward();

  const { data: finishedTasks } = useQuery(getFinishedTasks);

  const { data: user } = useAuth();

  const { data: tasks } = tasksCrud.getAll.useQuery();
  const createTask = tasksCrud.create.useAction();

  const handleNewTask = async (newTask: Task) => {
    await createTask(newTask)
  };

  return (
    <MainLayout username={user?.username}>
      <NewTaskForm createTask={handleNewTask} />

      {tasks && tasks.map((tsk) => <Todo {...tsk} key={tsk.id} />)}

      {/* finishedTasks go here */}
      <Text> Finished Tasks</Text>
      {finishedTasks && finishedTasks.map((tsk) => <Todo {...tsk} key={tsk.id} />)}
    </MainLayout>
  );
}

function Todo({ id, isDone, description }: Task) {

  const updateTask = tasksCrud.update.useAction();
  const deleteTask = tasksCrud.delete.useAction();
  
  return (
    <HStack
      alignItems={'center'}
      justify='space-between'
      bgColor='purple.50'
      borderRadius='lg'
      border='1px solid rgba(0, 0, 0, 0.11)'
      p={2}
      w='full'
    >
      <HStack>
        <Checkbox
          defaultChecked={!!isDone}
          onChange={async (e) => await updateTask({ id, isDone: e.currentTarget.checked })}
        />
        <Text ml={2} {...(isDone && { as: 's' })}>
          {description}
        </Text>
      </HStack>
      {isDone && (
        <CButton size={'xs'} variant='unstyled' onClick={async () => await deleteTask({ id })}>
          ❌
        </CButton>
      )}
    </HStack>
  );
}

function NewTaskForm({ createTask }: { createTask: any }) {
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async () => {
    try {
      await createTask({
        description,
      });
      (document.getElementById('description') as HTMLInputElement).value = '';
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
      <Box id='rewardId' >
        <Button onClick={handleSubmit} minWidth={'7rem'} >
          {'Add Task'}
        </Button>
      </Box>

    </HStack>
  );
}
