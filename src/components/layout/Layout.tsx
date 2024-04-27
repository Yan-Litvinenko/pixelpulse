import React from 'react';
import { ContextApp } from '../app/App';
import Header from '../header/Header';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';
import Quest from '../quest/Quest';
import { IAppContext } from '../../interfaces/interface';

const large = () => {
    return (
        <>
            <Header />
            <Profile />
            <MobileBoxButton />
        </>
    );
};

const medium = (context: IAppContext) => {
    if (context.page !== 'beginning') {
        return (
            <>
                <MobileBoxButton />
            </>
        );
    }

    return (
        <>
            <Profile />
            <MobileBoxButton />
        </>
    );
};

const Layout = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);

    if (contextApp?.page === 'welcome') {
        return <></>;
    }

    if (contextApp?.isMedium) {
        return medium(contextApp);
    }

    if (contextApp?.isLarge) {
        return large();
    }

    return (
        <>
            <Header />
            <Navigation className={contextApp?.styles} />
            <Profile />
            <Quest />
        </>
    );
};

export default Layout;
