import React from 'react';
import styles from './Header.module.css';

export const Header = () => (
  <div className={styles.div}>
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <div className="navbar-brand">
          <img src="./icon.jpeg" alt="filmIcon" height="60" />
        </div>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="./">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./podcasts">
              Podcasts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./movies">
              Movies
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
