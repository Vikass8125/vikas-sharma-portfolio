// ============================================================
// useTheme.js — Dark / Light theme toggle hook
// ============================================================
// Priority order:
//   1. User's saved choice in localStorage
//   2. System preference (prefers-color-scheme)
//   3. Default: dark
// The chosen theme is applied as a class on <html>:
//   dark  →  <html class="dark">
//   light →  <html class="light">
// ============================================================

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'vs-portfolio-theme';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // localStorage unavailable (private browsing etc.)
  }
  // Fall back to system preference
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }
  return 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply class to <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}
