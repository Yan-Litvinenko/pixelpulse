import React from 'react';
import useLocalTime from '../../hooks/useLocalTime';
import HeaderStatistics from '../headerStatistics/HeaderStatistics';
import HeaderTime from '../headerTime/HeaderTime';
import styles from './Header.module.scss';

const Header = (): React.JSX.Element => {
    const [localTime] = useLocalTime();

    return (
        <header className={styles.header}>
            <HeaderStatistics className={styles} />
            <HeaderTime time={localTime} />
        </header>
    );
};

export default Header;
