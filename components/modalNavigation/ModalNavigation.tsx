'use client';

import React from 'react';
import Cross from '../cross/Cross';
import NavigationMobileHeader from '../navigationMobileHeader/NavigationMobileHeader';
import NavigationMobileButtons from '../navigationMobileButtons/NavigationMobileButtons';
import NavigationMobileContent from '../navigationMobileContent/NavigationMobileContent';
import NavigationMobileSettings from '../navigationMobileSettings/NaviagtionMobileSettings';
import useModal from '../../hooks/useModal';
import styles from '@/styles/components/modalNavigation/ModalNavigation.module.scss';

export default function NavigationMobile(): React.JSX.Element {
    const closeModalNavigationMobile = useModal('navigationMobile').close;

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__inner}>
                <div className={styles.navigation__header}>
                    <h2 className={styles.navigation__title}>Navigation</h2>
                    <Cross handler={closeModalNavigationMobile} />
                </div>
                <NavigationMobileHeader />
                <NavigationMobileContent />
                <NavigationMobileSettings />
            </div>
            <NavigationMobileButtons />
        </div>
    );
}
