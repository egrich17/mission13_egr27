import React from 'react';
import { Page } from './Page';
import styles from './Home.module.css';

export const HomePage = () => (
  <Page>
    <div>
      <br></br>
      <h1 className={styles.h1}>The Joel Hilton Movie Collection</h1>
      <img className={styles.img} src="./joel.jpg" alt="joel" />
    </div>
  </Page>
);
