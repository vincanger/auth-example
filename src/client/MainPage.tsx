import { useState, type FC } from 'react';
import { Tasks } from 'wasp/client/crud';
import { type Task } from 'wasp/entities';
import Button from './components/Button';
import { Input, HStack, Text, Checkbox, Button as CButton, Box } from '@chakra-ui/react';

export default function MainPage() {
  const { data: tasks } = Tasks.getAll.useQuery();
  const createTask = Tasks.create.useAction();

  return (
    <>
      <NewTaskForm createTask={createTask} />
      {tasks && tasks.map((tsk) => <Todo {...tsk} key={tsk.id} />)}
    </>
  );
}

const Todo: FC<Task> = ({ id, isDone, description }) => {
  const updateTask = Tasks.update.useAction();
  const deleteTask = Tasks.delete.useAction();

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
          defaultChecked={isDone}
          onChange={async (e) => await updateTask({ id: id, isDone: e.currentTarget.checked })}
        />
        <Text ml={2} {...(isDone && { as: 's' })}>
          {description}
        </Text>
      </HStack>
      {isDone && (
        <CButton size={'xs'} variant='unstyled' onClick={async () => await deleteTask({ id: id })}>
          ❌
        </CButton>
      )}
    </HStack>
  );
}

interface NewTaskFormProps {
  createTask: ({description}: {description: string}) => Promise<any>;
}

const NewTaskForm: FC<NewTaskFormProps> = ({ createTask }) => {
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async () => {
    try {
      await createTask({
        description,
      });
      setDescription('');
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Box id='rewardId'>
        <Button onClick={handleSubmit} minWidth={'7rem'}>
          {'Add Task'}
        </Button>
      </Box>
    </HStack>
  );
};
