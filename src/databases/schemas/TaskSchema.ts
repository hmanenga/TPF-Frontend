export const TaskSchema ={
  name: "Task",
  properties: {
    _id: "string",
    title: "string",
    description: "string",
    dueDate: "date",
    created_at: "date",
    priority: "string",
    completed: "bool",
    synced: "bool", 
  },
  primaryKey: "_id",
}