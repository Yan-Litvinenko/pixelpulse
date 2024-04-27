import React from 'react';
import { ContextApp } from '../app/App';
import Header from '../header/Header';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import Navigation from '../navigation/Navigation';
import NavigationMobile from '../navigationMobile/NavigationMobile';
import Profile from '../profile/Profile';
import Quest from '../quest/Quest';
import { IAppContext } from '../../interfaces/interface';

const Layout = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);

    if (contextApp?.page === 'welcome') {
        return <></>;
    }

    if ((contextApp?.isMedium || contextApp?.isLarge) && contextApp?.navigationMobile) {
        return <NavigationMobile />;
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

function large() {
    return (
        <>
            <Header />
            <Profile />
            <MobileBoxButton />
        </>
    );
}

function medium(context: IAppContext) {
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
}

export default Layout;
