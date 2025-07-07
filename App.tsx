
import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDarkMode } from './hooks/useDarkMode';
import { LOCAL_STORAGE_KEYS } from './constants';
import { Login } from './components/auth/Login';
import { TaskDashboard } from './components/tasks/TaskDashboard';

function App() {
  const [username, setUsername] = useLocalStorage<string | null>(LOCAL_STORAGE_KEYS.USERNAME, null);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleLogin = (name: string) => {
    setUsername(name);
  };

  const handleLogout = () => {
    setUsername(null);
  };

  if (!username) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <TaskDashboard 
      username={username} 
      onLogout={handleLogout}
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    />
  );
}

export default App;
