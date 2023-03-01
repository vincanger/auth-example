export async function getTasks(args, context){
  return context.entities.Task.findMany();
}
