import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import { Frame } from '../frame/Frame';
import { Outlet, useLocation } from 'react-router-dom';
import { SmoothTransition } from '../../hoc/SmoothTransition';
import { useTitle } from '../../hooks/useTitle';
import Header from '../header/Header';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';
import Quest from '../quest/Quest';
import React from 'react';
import styles from './Layout.module.scss';

const Layout = (): React.JSX.Element => {
    const contextApp = React.useContext<IContextApp | null>(ContextApp);

    if (!contextApp) return <></>;

    const location = useLocation();
    useTitle();

    return (
        <>
            {location.pathname === '/' ? (
                <Outlet />
            ) : (
                <>
                    {' '}
                    <Header />
                    <Navigation styles={contextApp.styles} />
                    <Quest />
                    <div
                        className={`${styles.content} ${location.pathname === '/beginning' ? styles.content_beginning : ''}`}
                    >
                        <Frame className={styles.frame} />
                        <SmoothTransition>
                            <Outlet />
                        </SmoothTransition>
                    </div>
                    {(contextApp.isLarge || contextApp.isMedium) && location.pathname !== '/beginning' ? null : (
                        <Profile />
                    )}
                    {contextApp.isLarge || contextApp.isMedium ? <MobileBoxButton /> : null}
                </>
            )}
        </>
    );
};

export default Layout;
