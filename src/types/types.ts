// Define the Task interface
export interface Task {
  _id: string | number[];
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  completed: boolean;
  created_at: Date;
}

// Define the RadioButtonProps interface
export interface RadioButtonProps {
  id: string;
  label: string;
  value: string;
}

// Define the TaskState interface
export interface TaskState {
  tasks: Task[];
  currentTask: Task | null;
  isLoading: boolean;
  error: string | undefined;
}

export type RootStackParamList = {
  AddTaskScreen: { taskId: string };
};
