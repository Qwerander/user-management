import React from 'react';
import styles from './layout.module.css';

interface Ilayout {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Ilayout) => {
  return <div className={styles.layout}>{children}</div>;
};
