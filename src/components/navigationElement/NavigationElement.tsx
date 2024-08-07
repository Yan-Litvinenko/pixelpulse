import React from 'react';
import styles from './NavigationElement.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Hexagon } from '../svgIcon/SvgIcon';
import { NavLink } from 'react-router-dom';
import { scroll } from '../../classes/Scroll';
import { soundsClickTrigger } from '../../store/soundsSlice';
import { useModal } from '../../hooks/useModal';
import type { AppDispatch, RootState } from '../../store/store';
import type { INavigationElement } from '../../interfaces/interface.component';

const NavigationElement = (props: INavigationElement): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const closeNavigationMobile = useModal('navigationMobile').close;

    const { isMedium } = useSelector((state: RootState) => state.mediaQuery);
    const { pageName } = props;

    const switchPage = (): void => {
        if (isMedium) {
            closeNavigationMobile();
            scroll.on();
        } else {
            dispatch(soundsClickTrigger());
        }
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
