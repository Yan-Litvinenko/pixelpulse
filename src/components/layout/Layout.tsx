import React from 'react';
import { ContextApp } from '../app/App';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import Profile from '../profile/Profile';
import Quest from '../quest/Quest';
import { IAppContext } from '../../interfaces/interface';

const Layout = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);
    const location = useLocation();

    const addProfile = (): React.JSX.Element | null => {
        if ((contextApp?.isLarge || contextApp?.isMedium) && location.pathname !== '/beginning') {
            return null;
        }

        return <Profile />;
    };

    return (
        <>
            <Header />
            <Navigation className={contextApp?.styles} />
            <Outlet />
            <Quest />
            {addProfile()}
            {contextApp?.isLarge || contextApp?.isMedium ? <MobileBoxButton /> : null}
        </>
    );
};

export default Layout;
