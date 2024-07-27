import React from 'react';
import { INavigation } from '../../interfaces/interface.component';
import { nanoid } from 'nanoid';
import { NavigationElement } from '../navigationElement/NavigationElement';
import { Page } from '../../interfaces/interface';

const Navigation = (props: INavigation): React.JSX.Element => {
    const { styles } = props;

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
                {['beginning', 'logs', 'achievements', 'creations', 'games'].map((page) => (
                    <NavigationElement key={nanoid()} pageName={page as Page} />
                ))}
            </ul>
        </nav>
    );
};

export { Navigation };
