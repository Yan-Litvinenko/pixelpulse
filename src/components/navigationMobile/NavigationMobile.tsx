import React from 'react';
import styles from './NavigationMobile.module.scss';
import { Cross } from '../cross/Cross';
import { HeaderStatistics } from '../headerStatistics/HeaderStatistics';
import { MobileBoxButton } from '../mobileBoxButton/MobileBoxButton';
import { Navigation } from '../navigation/Navigation';
import { Setting } from '../setting/Setting';
import { useModal } from '../../hooks/useModal';

const NavigationMobile = (): React.JSX.Element => {
    const closeModalNavigationMobile = useModal('navigationMobile').close;

    return (
        <div className={styles.box}>
            <div className={styles.box__inner}>
                <div className={styles.box__header}>
                    <h2 className={styles.header}>Navigation</h2>
                    <Cross handler={closeModalNavigationMobile} />
                </div>
                <HeaderStatistics styles={styles} />
                <Navigation styles={styles} />
                <Setting className={styles} />
            </div>
            <MobileBoxButton />
        </div>
    );
};

export { NavigationMobile };
