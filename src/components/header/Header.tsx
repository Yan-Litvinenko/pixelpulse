import React from 'react';
import styles from './Header.module.scss';
import { HeaderStatistics } from '../headerStatistics/HeaderStatistics';
import { HeaderTime } from '../headerTime/HeaderTime';

const Header = (): React.JSX.Element => {
    return (
        <header className={styles.header}>
            <HeaderStatistics styles={styles} />
            <HeaderTime />
        </header>
    );
};

export { Header };
