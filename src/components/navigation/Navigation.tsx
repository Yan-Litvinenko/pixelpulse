import React from 'react';
import { nanoid } from 'nanoid';
import { Page } from '../../interfaces/interface';
import NavigationElement from '../navigationElement/NavigationElement';
import { INavigation } from '../../interfaces/interface.component';

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

export default Navigation;
