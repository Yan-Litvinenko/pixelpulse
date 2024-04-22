import React from 'react';
import { ContextApp } from '../app/App';
import NavigationElement from '../navigationElement/NavigationElement';
import { IAppContext } from '../../interfaces/interfaces';

interface INavigation {
    className: Record<string, string> | undefined;
}

const Navigation = (props: INavigation): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp)!;
    const classes: Record<string, string> = props.className !== undefined ? props.className : {};

    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__list}>
                <NavigationElement activeElement={contextApp?.page || 'welcome'} textContent={'beginning'} />
                <NavigationElement activeElement={contextApp?.page || 'welcome'} textContent={'logs'} />
                <NavigationElement activeElement={contextApp?.page || 'welcome'} textContent={'achievements'} />
                <NavigationElement activeElement={contextApp?.page || 'welcome'} textContent={'creations'} />
                <NavigationElement activeElement={contextApp?.page || 'welcome'} textContent={'games'} />
            </ul>
        </nav>
    );
};

export default Navigation;
