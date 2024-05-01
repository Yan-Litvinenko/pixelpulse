import React, { useContext } from 'react';
import Cross from '../cross/Cross';
import Heading from '../heading/Heading';
import Setting from '../setting/Setting';
import HeaderStatistics from '../headerStatistics/HeaderStatistics';
import Navigation from '../navigation/Navigation';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import { IAppContext } from '../../interfaces/interface';
import { ContextApp } from '../app/App';
import styles from './NavigationMobile.module.scss';

const NavigationMobile = (): React.JSX.Element => {
    const contextApp = useContext<IAppContext | undefined>(ContextApp);

    return (
        <div className={styles.box}>
            <div className={styles.box__inner}>
                <div className={styles.box__header}>
                    <Heading className={styles.header} level={'2'} textContent={'Navigation'} />
                    <Cross setModalState={() => contextApp?.setNavigationMobile(false)} scrollStatus="on" />
                </div>
                <HeaderStatistics className={styles} />
                <Navigation className={styles} />
                <Setting className={styles} />
            </div>
            <MobileBoxButton />
        </div>
    );
};

export default NavigationMobile;
