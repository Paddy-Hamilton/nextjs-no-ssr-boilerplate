import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import cx from 'classNames';

import { AppState } from '@utils/store';
import { useAppSelector, useAppDispatch } from '@utils/hooks';

import ThemeToggle from '@components/ThemeToggle';

import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
  const { dark } = useAppSelector((state: AppState) => state.ui);

  useEffect(() => {
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('dark');
    return () => {};
  }, [dark]);

  return (
    <div className={cx(styles.container, { [styles.dark]: dark })}>
      <Head>
        <title>NextJs no SSR boilerplate </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Next Js no SSR boilerplate with Redux toolkit in Typescript</p>
      <ThemeToggle />
      <p>Also use redux-persist for ... persisting state &#128522;</p>
      <p>This also has a very contrived and not good use of redux.</p>
    </div>
  );
};

export default IndexPage;
