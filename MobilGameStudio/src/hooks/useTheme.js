import { useState, useEffect } from 'react';

const STORAGE_KEY = 'xgames-theme';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prefersDark = stored === 'dark';
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
    document.body.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', next);
      document.body.classList.toggle('dark', next);
      return next;
    });
  };

  return { isDark, toggleTheme };
}
