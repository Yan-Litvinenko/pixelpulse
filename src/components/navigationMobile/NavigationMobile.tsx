import React, { useContext } from 'react';
import Cross from '../cross/Cross';
import Setting from '../setting/Setting';
import HeaderStatistics from '../headerStatistics/HeaderStatistics';
import Navigation from '../navigation/Navigation';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import { IAppContext } from '../../interfaces/interface';
import { ContextApp } from '../app/App';
import styles from './NavigationMobile.module.scss';

const NavigationMobile = (): React.JSX.Element => {
    const contextApp = useContext<IAppContext | undefined>(ContextApp);

    if (!contextApp) return <></>;

    const { setNavigationMobile, handleSoundModal } = contextApp;

    return (
        <div className={styles.box}>
            <div className={styles.box__inner}>
                <div className={styles.box__header}>
                    <h2 className={styles.header}>Navigation</h2>
                    <Cross
                        setModalState={() => {
                            setNavigationMobile(false);
                            handleSoundModal();
                        }}
                        scrollStatus="on"
                    />
                </div>
                <HeaderStatistics className={styles} />
                <Navigation styles={styles} />
                <Setting className={styles} />
            </div>
            <MobileBoxButton />
        </div>
    );
};

export default NavigationMobile;
