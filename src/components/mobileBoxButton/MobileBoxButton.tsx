import React from 'react';
import { IAppContext } from '../../interfaces/interface';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import styles from './MobileBoxButton.module.scss';

const MobileBoxButton = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);
    const handleNavigationClick = (): void => contextApp?.setNavigationMobile(true);
    const handleAboutClick = (): void => {
        contextApp?.setPage('about');
        contextApp?.setNavigationMobile(false);
    };

    return (
        <div className={styles.box}>
            <Button className={styles.box__navigation} onClick={handleNavigationClick} textContent="navigation" />
            <Button className={styles.box__about} onClick={handleAboutClick} textContent="about" />
        </div>
    );
};

export default MobileBoxButton;
