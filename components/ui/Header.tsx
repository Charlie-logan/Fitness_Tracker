
import React from 'react';
import { SunIcon, MoonIcon, LogoutIcon, ClipboardIcon } from './icons';

interface HeaderProps {
    username: string;
    onLogout: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ username, onLogout, isDarkMode, toggleDarkMode }) => {
    return (
        <header className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <ClipboardIcon className="h-7 w-7 text-primary" />
                        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100 hidden sm:block">
                           Welcome, {username}!
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                        </button>
                        <button
                            onClick={onLogout}
                            className="flex items-center space-x-2 p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Logout"
                        >
                            <LogoutIcon className="w-6 h-6" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
