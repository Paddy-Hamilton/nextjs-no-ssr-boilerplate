import type { NextPage } from 'next';
import Head from 'next/head';
import DarkModeToggle from 'react-dark-mode-toggle';

import { AppState } from '@utils/store';
import { useAppSelector, useAppDispatch } from '@utils/hooks';

import { toggleTheme } from '@reducers/ui';

import styles from '../styles/Home.module.css';

const ThemeToggle: NextPage = () => {
  const { dark: isDarkMode } = useAppSelector((state: AppState) => state.ui);
  const dispatch = useAppDispatch();
  const setIsDarkMode = () => dispatch(toggleTheme());

  return <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />;
};

export default ThemeToggle;
