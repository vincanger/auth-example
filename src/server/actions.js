export async function createTask({ description }, context) {

  return context.entities.Task.create({
    data: {
      description
    },
  });
}

export async function updateTask({ taskId, isDone }, context) {
  console.log('updateTask', taskId, isDone);
  return context.entities.Task.update({
    where: {
      id: taskId
    },
    data: { isDone },
  });
}

export async function deleteTask({ taskId }, context) {
  return context.entities.Task.delete({
    where: {
      id: taskId
    },
  });
}
