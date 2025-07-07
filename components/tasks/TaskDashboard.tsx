
import React, { useState, useMemo } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../../constants';
import { Task, FilterType } from '../../types';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';
import { Modal } from '../ui/Modal';
import { Header } from '../ui/Header';
import { TaskFilter } from './TaskFilter';
import { SearchBar } from './SearchBar';
import { PlusIcon } from '../ui/icons';

interface TaskDashboardProps {
  username: string;
  onLogout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const TaskDashboard: React.FC<TaskDashboardProps> = ({ username, onLogout, isDarkMode, toggleDarkMode }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>(LOCAL_STORAGE_KEYS.TASKS, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTask = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleDeleteConfirmation = (id: string) => {
    setTaskToDelete(id);
  };

  const handleDeleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter(task => task.id !== taskToDelete));
      setTaskToDelete(null);
    }
  };

  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSaveTask = (task: Task) => {
    const taskExists = tasks.some(t => t.id === task.id);
    if (taskExists) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const filteredTasks = useMemo(() => {
    return tasks
      .filter(task => {
        if (filter === FilterType.COMPLETED) return task.completed;
        if (filter === FilterType.PENDING) return !task.completed;
        return true;
      })
      .filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [tasks, filter, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header username={username} onLogout={onLogout} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-center">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <TaskFilter currentFilter={filter} onFilterChange={setFilter} tasks={tasks} />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Your Tasks</h2>
          <button
            onClick={handleAddTask}
            className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <PlusIcon className="w-5 h-5" />
            <span>Add Task</span>
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteConfirmation}
          onEdit={handleEditTask}
        />
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={taskToEdit ? 'Edit Task' : 'Add New Task'}>
        <TaskForm
          onSave={handleSaveTask}
          onClose={() => setIsModalOpen(false)}
          taskToEdit={taskToEdit}
        />
      </Modal>

      <Modal isOpen={!!taskToDelete} onClose={() => setTaskToDelete(null)} title="Confirm Deletion">
        <div>
          <p className="text-slate-600 dark:text-slate-300">Are you sure you want to delete this task? This action cannot be undone.</p>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setTaskToDelete(null)}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-500 rounded-md shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteTask}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
