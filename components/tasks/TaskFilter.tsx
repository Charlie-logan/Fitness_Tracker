
import React from 'react';
import { FilterType, Task } from '../../types';

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  tasks: Task[];
}

export const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange, tasks }) => {
  const counts = {
    all: tasks.length,
    pending: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  };

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: FilterType.ALL },
    { label: 'Pending', value: FilterType.PENDING },
    { label: 'Completed', value: FilterType.COMPLETED },
  ];
  
  return (
    <div className="flex space-x-2 bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
      {filters.map(({ label, value }) => {
        const isActive = currentFilter === value;
        return (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`w-full px-3 py-1.5 text-sm font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 dark:focus:ring-offset-slate-700 focus:ring-primary
              ${isActive
                ? 'bg-white dark:bg-slate-800 text-primary-dark dark:text-white shadow'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-600/50'
              }
            `}
          >
            {label} <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${isActive ? 'bg-primary-light dark:bg-primary text-primary-dark dark:text-white' : 'bg-slate-300 dark:bg-slate-600'}`}>{counts[value]}</span>
          </button>
        );
      })}
    </div>
  );
};
