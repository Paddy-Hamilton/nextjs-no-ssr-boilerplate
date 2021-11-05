import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs no SSR boilerplate </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <p>Next Js no SSR boilerplate with Redux toolkit in Typescript</p>
      </header>
    </div>
  );
};

export default IndexPage;
