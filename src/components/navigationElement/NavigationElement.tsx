import React from 'react';
import styles from './NavigationElement.module.scss';
import { Hexagon } from '../svgIcon/SvgIcon';
import { mediaQuerySelector } from '../../store/selectors';
import { NavLink, useLocation } from 'react-router-dom';
import { scroll } from '../../classes/Scroll';
import { soundsClickTrigger, soundsModalTrigger } from '../../store/slices/soundsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import type { AppDispatch } from '../../store/store';
import type { INavigationElement } from '../../interfaces/interface.component';
import type { Page } from '../../interfaces/interface';

const NavigationElement = (props: INavigationElement): React.JSX.Element => {
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const closeNavigationMobile = useModal('navigationMobile').close;

    const { isMedium } = useSelector(mediaQuerySelector);
    const { pageName } = props;

    const switchPage = (event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
        const from = location.pathname.replace('/', '');
        const where = (event.target as HTMLElement).closest('li')?.querySelector('h4')?.textContent as Page;

        if (isMedium) {
            if (where !== from) {
                dispatch(soundsModalTrigger());
            }

            closeNavigationMobile();
            scroll.on();
        } else {
            if (where !== from) {
                dispatch(soundsClickTrigger());
            }
        }
    };

    return (
        <li onClick={(event) => switchPage(event)}>
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
