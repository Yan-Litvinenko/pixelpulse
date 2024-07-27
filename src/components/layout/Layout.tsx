import React from 'react';
import { Frame } from '../frame/Frame';
import { Header } from '../header/Header';
import { MobileBoxButton } from '../mobileBoxButton/MobileBoxButton';
import { Navigation } from '../navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import { Profile } from '../profile/Profile';
import { Quest } from '../quest/Quest';
import { SmoothTransition } from '../../hoc/SmoothTransition';
import { useAppContext } from '../../hooks/useAppContext';
import { useTitle } from '../../hooks/useTitle';
import stylesLayout from './Layout.module.scss';

const Layout = (): React.JSX.Element => {
    const { isMedium, isLarge, styles } = useAppContext();
    const location = useLocation();
    const isBeginning: boolean = location.pathname === '/beginning';

    useTitle();

    return (
        <>
            {location.pathname === '/' ? (
                <Outlet />
            ) : (
                <>
                    {' '}
                    <Header />
                    <Navigation styles={styles} />
                    <Quest />
                    <div className={`${stylesLayout.content} ${isBeginning ? stylesLayout.content_beginning : ''}`}>
                        <Frame className={stylesLayout.frame} />
                        <SmoothTransition>
                            <Outlet />
                        </SmoothTransition>
                    </div>
                    {(isLarge || isMedium) && !isBeginning ? null : <Profile />}
                    {isLarge || isMedium ? <MobileBoxButton /> : null}
                </>
            )}
        </>
    );
};

export { Layout };
