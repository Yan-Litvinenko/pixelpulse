import React from 'react';
import styles from './NavigationElement.module.scss';
import { Hexagon } from '../svgIcon/SvgIcon';
import { NavLink } from 'react-router-dom';
import { scroll } from '../../classes/Scroll';
import { useAppContext } from '../../hooks/useAppContext';
import { useModal } from '../../hooks/useModal';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { INavigationElement } from '../../interfaces/interface.component';

const NavigationElement = (props: INavigationElement): React.JSX.Element => {
    const { handleSoundClick, sounds } = useAppContext();
    const { isSmall, isMedium } = useSelector((state: RootState) => state.mediaQuery);
    const closeNavigationMobile = useModal('navigationMobile').close;

    const { pageName } = props;

    const switchPage = (): void => {
        if (!isMedium && !isSmall && sounds) handleSoundClick();

        closeNavigationMobile();
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
