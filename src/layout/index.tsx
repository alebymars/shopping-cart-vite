import React from 'react';
import Content from '@layout/Content';
import Sidebar from '@layout/Sidebar';
import styles from './Layout.module.css';

const Layout: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={`${styles.column} ${styles.large}`}>
                <Content />
            </div>
            <div className={`${styles.column} ${styles.small}`}>
                <Sidebar />
            </div>
        </div>
    );
};

export default Layout;