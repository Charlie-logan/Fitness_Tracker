
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../constants';

export function useDarkMode(): [boolean, () => void] {
  const [isEnabled, setIsEnabled] = useLocalStorage<boolean>(LOCAL_STORAGE_KEYS.DARK_MODE, window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const element = window.document.documentElement;
    if (isEnabled) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [isEnabled]);

  const toggleDarkMode = () => setIsEnabled(prev => !prev);

  return [isEnabled, toggleDarkMode];
}
