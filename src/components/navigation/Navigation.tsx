import React from 'react';
import { nanoid } from 'nanoid';
import { Page } from '../app/App';
import NavigationElement from '../navigationElement/NavigationElement';

interface INavigation {
    className: Record<string, string> | undefined;
}

const Navigation = ({ className }: INavigation): React.JSX.Element => {
    const classes: Record<string, string> = className !== undefined ? className : {};

    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__list}>
                {['beginning', 'logs', 'achievements', 'creations', 'games'].map((page) => (
                    <NavigationElement key={nanoid()} textContent={page as Page} />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
