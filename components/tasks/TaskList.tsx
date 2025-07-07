
import React from 'react';
import { Task } from '../../types';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, ...rest }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16 px-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">No tasks here!</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Looks like it's a clear day. Add a new task to get started.</p>
      </div>
    );
  }

  const sortedTasks = [...tasks].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <ul className="space-y-4">
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} {...rest} />
      ))}
    </ul>
  );
};
