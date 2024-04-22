import React from 'react';
import { ContextApp } from '../app/App';
import DecorativeCorner from '../decorativeCorner/DecorativeCorner';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';
import Quest from '../quest/Quest';
import { IAppContext } from '../../interfaces/interfaces';

const Layout = () => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);

    return (
        <>
            <DecorativeCorner />
            <Header />
            <Navigation className={contextApp?.styles} />
            <Profile />
            <Quest />
        </>
    );
};

export default Layout;
