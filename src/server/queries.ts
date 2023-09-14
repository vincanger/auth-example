import type { Task } from '@wasp/entities';
import type { GetFinishedTasks } from '@wasp/queries/types';

export const getFinishedTasks: GetFinishedTasks<never, Task[]> = async (args, context) => {
  return context.entities.Task.findMany({ where: { isDone: true } });
}
