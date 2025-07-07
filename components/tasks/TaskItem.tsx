
import React from 'react';
import { Task, TaskPriority } from '../../types';
import { EditIcon, TrashIcon } from '../ui/icons';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const priorityClasses: Record<TaskPriority, string> = {
  [TaskPriority.HIGH]: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 border-red-300 dark:border-red-500/50',
  [TaskPriority.MEDIUM]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 border-yellow-300 dark:border-yellow-500/50',
  [TaskPriority.LOW]: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-300 dark:border-green-500/50',
};

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const isOverdue = task.dueDate && !task.completed && new Date(task.dueDate) < new Date();

  return (
    <li className={`
      bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex flex-col space-y-3 transition-all duration-300 border-l-4
      ${task.completed ? 'border-green-500 opacity-60' : priorityClasses[task.priority]}
    `}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary mt-1 cursor-pointer"
          />
          <div className="flex-1">
            <h3 className={`font-semibold text-lg ${task.completed ? 'line-through text-slate-500' : 'text-slate-800 dark:text-slate-100'}`}>
              {task.title}
            </h3>
            {task.description && <p className={`text-sm text-slate-600 dark:text-slate-400 mt-1 ${task.completed ? 'line-through' : ''}`}>{task.description}</p>}
          </div>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
          <button onClick={() => onEdit(task)} className="p-1.5 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <EditIcon className="w-5 h-5" />
          </button>
          <button onClick={() => onDelete(task.id)} className="p-1.5 text-slate-500 hover:text-red-600 dark:hover:text-red-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityClasses[task.priority]}`}>
          {task.priority} Priority
        </span>
        {task.dueDate && (
          <span className={`px-2 py-1 rounded-full ${isOverdue ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' : 'bg-slate-100 dark:bg-slate-700'}`}>
            Due: {new Date(task.dueDate).toLocaleDateString()}
            {isOverdue && ' (Overdue)'}
          </span>
        )}
        <span>
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
    </li>
  );
};
