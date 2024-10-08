'use client';

import React from 'react';
import AsideHero from '@/components/asideHero/AsideHero';
import AsideQuest from '@/components/asideQuest/AsideQuest';
import Frame from '@/components/frame/Frame';
import Header from '@/components/header/Header';
import Navigation from '@/components/navigation/Navigation';
import NavigationMobileButtons from '@/components/navigationMobileButtons/NavigationMobileButtons';
import useClient from '@/hooks/useClient';
import SmoothTransitionProvider from '@/hoc/SmoothTransitionProvider';
import styles from '@/styles/components/mainLayout/MainLayout.module.scss';
import { mediaQuerySelector } from '@/redux/selectors';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const locations: Record<string, string> = {
    beginning: '/beginning',
    logs: '/logs',
    achievements: '/achievements',
    creations: '/creations',
    games: '/games',
};

export default function MainLayout({ children }: { children: React.ReactNode }): React.JSX.Element | null {
    const path: string = usePathname();
    const isBeginning: boolean = path.includes('beginning');
    const isClient: boolean = useClient();
    const [isLoad, setIsLoad] = React.useState<boolean>(false);
    const { isMedium, isSmall } = useSelector(mediaQuerySelector);

    React.useEffect(() => {
        setIsLoad(true);
    }, []);

    const renderAsideHero = (): null | React.JSX.Element => {
        if (!isBeginning && isSmall) {
            return null;
        }

        if (isClient) {
            return <AsideHero />;
        }

        return null;
    };

    const renderNavigationMobileButtons = (): null | React.JSX.Element => {
        if (isMedium && isClient) {
            return <NavigationMobileButtons />;
        }

        return null;
    };

    return isLoad ? (
        <>
            <Header />
            {renderAsideHero()}
            <main className={styles.layout}>
                <Frame className={styles.frame} />
                <SmoothTransitionProvider>{children}</SmoothTransitionProvider>
            </main>
            <AsideQuest />
            <Navigation locations={locations} />
            {renderNavigationMobileButtons()}
        </>
    ) : null;
}
