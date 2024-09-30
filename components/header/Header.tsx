import React from 'react';
import HeaderStatistics from '../headerStatistics/HeaderStatistics';
import HeaderTime from '../headerTime/HeaderTime';
import styles from '@/styles/components/header/Header.module.scss';

export default function Header(): React.JSX.Element {
    return (
        <header className={styles.header}>
            <HeaderStatistics />
            <HeaderTime />
        </header>
    );
}
