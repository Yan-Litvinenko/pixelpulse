import React from 'react';
import { ContextApp } from '../app/App';
import Frame from '../frame/Frame';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import Profile from '../profile/Profile';
import Quest from '../quest/Quest';
import { IAppContext } from '../../interfaces/interface';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: React.JSX.Element }): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);
    const location = useLocation();

    React.useEffect(() => {
        const path: string[] = location.pathname.split('/');
        const lastField: string = path[path.length - 1];

        if (lastField.length) {
            const transformTitle: string = lastField[0].toLocaleUpperCase() + lastField.slice(1);
            document.title = transformTitle;
        } else {
            document.title = 'Welcome';
        }
    }, [location.pathname]);

    if (location.pathname === '/') {
        return <>{children}</>;
    }

    const addProfile = (): React.JSX.Element | null => {
        if ((contextApp?.isLarge || contextApp?.isMedium) && location.pathname !== '/beginning') {
            return null;
        }

        return (
            <>
                <Profile />
            </>
        );
    };

    return (
        <>
            <Header />
            <Navigation className={contextApp?.styles} />
            <Outlet />
            <Quest />
            <div className={`${styles.content} ${location.pathname === '/beginning' ? styles.content_beginning : ''}`}>
                <Frame className={styles.frame} />
                {children}
            </div>
            {addProfile()}
            {contextApp?.isLarge || contextApp?.isMedium ? <MobileBoxButton /> : null}
        </>
    );
};

export default Layout;
