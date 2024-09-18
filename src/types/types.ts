export default interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
}

export default interface RadioButtonProps {
  id: string;
  label: string;
  value: string;
}
