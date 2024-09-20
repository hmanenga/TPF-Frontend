// Define the Task interface
export interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  isCompleted: boolean;
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