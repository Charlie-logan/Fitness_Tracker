
export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  priority: TaskPriority;
  dueDate?: string;
}

export enum FilterType {
  ALL = 'all',
  PENDING = 'pending',
  COMPLETED = 'completed',
}
