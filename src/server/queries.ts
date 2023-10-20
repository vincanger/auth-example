import type { Task } from '@wasp/entities';
import type { GetAllTasks } from '@wasp/queries/types';

export const getAllTasks: GetAllTasks<void, Task[]> = async (args, context) => {
  return context.entities.Task.findMany({});
}
