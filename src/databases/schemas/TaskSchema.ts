export const TaskSchema ={
  name: "Task",
  properties: {
    _id: "string",
    description: "string",
    dueDate: "date",
    created_at: "date",
    priority: "string",
    completed: "bool"
  },
  primaryKey: "_id",
}