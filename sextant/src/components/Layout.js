import React from 'react';
import styles from '../styles/Layout.module.css';
import PublicIP from './PublicIP';
const Layout = ({ childern }) => {
  return (
    <section className={styles.container}>
      <h2>Our Services</h2>
      <div className={styles.cards}>
        <PublicIP />
        <PublicIP IPV={6} />
      </div>
    </section>
  );
};

export default Layout;
