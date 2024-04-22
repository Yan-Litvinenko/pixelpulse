import React from 'react';
import useLocalTime from '../../hooks/useLocalTime';
import Statistics from '../statistics/Statistics';
import Time from '../time/Time';
import styles from './Header.module.scss';

const Header = (): React.JSX.Element => {
    const [localTime] = useLocalTime();

    return (
        <header className={styles.header}>
            <Statistics className={styles} />
            <Time time={localTime} />
        </header>
    );
};

export default Header;
