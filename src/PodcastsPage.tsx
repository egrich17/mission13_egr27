import React from 'react';
import styles from './Podcasts.module.css';

import { Page } from './Page';
export const PodcastsPage = () => (
  <Page>
    <div className={styles.div}>
      <br></br>
      <h1 className={styles.h1}>Check out Joel's podcast called baconsale</h1>
      <a className={styles.a} href="https://baconsale.com/">
        Joel's Episodes
      </a>
    </div>
  </Page>
);
