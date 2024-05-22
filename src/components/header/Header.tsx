import React from 'react';
import HeaderStatistics from '../headerStatistics/HeaderStatistics';
import HeaderTime from '../headerTime/HeaderTime';
import styles from './Header.module.scss';

const Header = (): React.JSX.Element => {
    return (
        <header className={styles.header}>
            <HeaderStatistics className={styles} />
            <HeaderTime />
        </header>
    );
};

export default Header;
