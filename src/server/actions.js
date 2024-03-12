export async function createTask({ description }, context) {
  return context.entities.Task.create({
    data: {
      description
    },
  });
}

export async function updateTask({ id, isDone }, context) {
  return context.entities.Task.update({
    where: {
      id: id
    },
    data: { isDone },
  });
}

export async function deleteTask({ id }, context) {
  return context.entities.Task.delete({
    where: {
      id: id
    },
  });
}
