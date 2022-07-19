import React from 'react';
import styles from '../styles/Layout.module.css';
const Layout = ({ childern }) => {
  return (
    <section className={styles.container}>
      <h2>Our Services</h2>
      <article className={styles.cards}>{childern}</article>
    </section>
  );
};

export default Layout;
