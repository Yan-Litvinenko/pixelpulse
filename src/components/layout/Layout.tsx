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
import { ILayout } from '../../interfaces/interface.component';
import stylesLayout from './Layout.module.scss';

const Layout = (props: ILayout): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);

    if (!contextApp) return <></>;

    const { children } = props;
    const { isMedium, isLarge, styles } = contextApp;
    const location = useLocation();

    React.useEffect(() => {
        const path: string[] = location.pathname.split('/');
        const lastField: string = path[path.length - 1];

        if (lastField.length) {
            const transformTitle: string = lastField[0].toLocaleUpperCase() + lastField.slice(1);
            document.title = transformTitle;
        } else {
            document.title = 'Web Portfolio';
        }
    }, [location.pathname]);

    if (location.pathname === '/') {
        return <>{children}</>;
    }

    const addProfile = (): React.JSX.Element | null => {
        if ((isLarge || isMedium) && location.pathname !== '/beginning') {
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
            <Navigation styles={styles} />
            <Outlet />
            <Quest />
            <div
                className={`${stylesLayout.content} ${location.pathname === '/beginning' ? stylesLayout.content_beginning : ''}`}
            >
                <Frame className={stylesLayout.frame} />
                {children}
            </div>
            {addProfile()}
            {isLarge || isMedium ? <MobileBoxButton /> : null}
        </>
    );
};

export default Layout;
