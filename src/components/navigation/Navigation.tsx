import React from 'react';
import NavigationElement from '../navigationElement/NavigationElement';

interface INavigation {
    className: Record<string, string> | undefined;
}

const Navigation = ({ className }: INavigation): React.JSX.Element => {
    const classes: Record<string, string> = className !== undefined ? className : {};

    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__list}>
                <NavigationElement textContent={'beginning'} />
                <NavigationElement textContent={'logs'} />
                <NavigationElement textContent={'achievements'} />
                <NavigationElement textContent={'creations'} />
                <NavigationElement textContent={'games'} />
            </ul>
        </nav>
    );
};

export default Navigation;
