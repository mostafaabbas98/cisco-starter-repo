import React from 'react';
import styles from '../styles/Layout.module.css';
import PublicIP from './PublicIP';
import PylonInfo from './PylonInfo';
const Layout = ({ childern }) => {
  return (
    <section className={styles.container}>
      <h2>Our Services</h2>
      <div className={styles.cards}>
        <PublicIP />
        <PublicIP IPV={6} />
        <PylonInfo />
      </div>
    </section>
  );
};

export default Layout;
