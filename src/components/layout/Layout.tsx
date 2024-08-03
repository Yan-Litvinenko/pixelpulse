import React from 'react';
import { Frame } from '../frame/Frame';
import { Header } from '../header/Header';
import { MobileBoxButton } from '../mobileBoxButton/MobileBoxButton';
import { Navigation } from '../navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import { Profile } from '../profile/Profile';
import { Quest } from '../quest/Quest';
import { SmoothTransition } from '../../hoc/SmoothTransition';
import { Store } from '../../store/store';
import { useAppContext } from '../../hooks/useAppContext';
import { useSelector } from 'react-redux';
import { useTitle } from '../../hooks/useTitle';
import stylesLayout from './Layout.module.scss';

const Layout = (): React.JSX.Element => {
    const { isSmall, isMedium } = useSelector((state: Store) => state.mediaQuery);
    const { styles } = useAppContext();
    const location = useLocation();
    const isBeginning: boolean = location.pathname === '/beginning';
    const notTransition: boolean = location.state?.notTransition;

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
                        {notTransition ? (
                            <Outlet />
                        ) : (
                            <SmoothTransition>
                                <Outlet />
                            </SmoothTransition>
                        )}
                    </div>
                    {(isMedium || isSmall) && !isBeginning ? null : <Profile />}
                    {isMedium || isSmall ? <MobileBoxButton /> : null}
                </>
            )}
        </>
    );
};

export { Layout };
