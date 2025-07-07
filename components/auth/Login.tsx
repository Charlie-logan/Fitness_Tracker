
import React, { useState } from 'react';
import { ClipboardIcon } from '../ui/icons';

interface LoginProps {
  onLogin: (username: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    } else {
      setError('Username cannot be empty.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 animate-fade-in p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
            <div className="flex flex-col items-center mb-6">
                <ClipboardIcon className="h-12 w-12 text-primary mb-3"/>
                <h1 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100">Personal Task Tracker</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Enter your name to get started</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 dark:text-slate-300 sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary-dark focus:outline-none transition-all"
                aria-label="Username input"
              />
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105"
            >
              Continue
            </button>
          </form>
        </div>
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-6">
          Your data is saved locally in your browser.
        </p>
      </div>
    </div>
  );
};
