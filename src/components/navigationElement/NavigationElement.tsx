import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import { INavigationElement } from '../../interfaces/interface.component';
import { NavLink } from 'react-router-dom';
import { scroll } from '../../classes/Scroll';
import { Store } from '../../store/store';
import { useAppContext } from '../../hooks/useAppContext';
import { useSelector } from 'react-redux';
import styles from './NavigationElement.module.scss';

const NavigationElement = (props: INavigationElement): React.JSX.Element => {
    const { handleSoundClick, navigationMobile } = useAppContext();
    const { isSmall, isMedium } = useSelector((state: Store) => state.mediaQuery);

    const { pageName } = props;

    const switchPage = (): void => {
        navigationMobile.closeModal();

        if (!isMedium && !isSmall) {
            handleSoundClick();
        }

        scroll.on();
    };

    return (
        <li onClick={switchPage}>
            <NavLink
                to={pageName}
                className={({ isActive }) => (isActive ? `${styles.link_active} ${styles.link}` : styles.link)}
            >
                <h4 className={styles.link__title}>
                    {pageName}
                    <Hexagon />
                </h4>
                <p className={styles.link__text}>Suscipit est consequatur nemo voluptatem est labore saepe.</p>
            </NavLink>
        </li>
    );
};

export { NavigationElement };
