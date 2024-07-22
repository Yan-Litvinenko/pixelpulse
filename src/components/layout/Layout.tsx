import { Frame } from '../frame/Frame';
import { Outlet, useLocation } from 'react-router-dom';
import { SmoothTransition } from '../../hoc/SmoothTransition';
import Header from '../header/Header';
import { useTitle } from '../../hooks/useTitle';
import { useAppContext } from '../../hooks/useAppContext';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';
import Quest from '../quest/Quest';
import React from 'react';
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

export default Layout;
