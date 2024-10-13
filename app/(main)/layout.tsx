'use client';

import React from 'react';
import AsideHero from '@/components/asideHero/AsideHero';
import AsideQuest from '@/components/asideQuest/AsideQuest';
import Frame from '@/components/frame/Frame';
import Header from '@/components/header/Header';
import Navigation from '@/components/navigation/Navigation';
import NavigationMobileButtons from '@/components/navigationMobileButtons/NavigationMobileButtons';
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
    const [loadStyles, setLoadStyles] = React.useState<boolean>(false);
    const { isMedium, isSmall } = useSelector(mediaQuerySelector);

    React.useLayoutEffect(() => {
        setLoadStyles(true);
    }, []);

    if (!loadStyles) return <></>;

    const renderAsideHero = (): null | React.JSX.Element => {
        if (!isBeginning && isSmall) {
            return null;
        }

        if (loadStyles) {
            return <AsideHero />;
        }

        return null;
    };

    const renderNavigationMobileButtons = (): null | React.JSX.Element => {
        if (isMedium && loadStyles) {
            return <NavigationMobileButtons />;
        }

        return null;
    };

    return loadStyles ? (
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
