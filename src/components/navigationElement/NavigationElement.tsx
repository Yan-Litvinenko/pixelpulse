import React from 'react';
import { NavLink } from 'react-router-dom';
import scroll from '../../classes/Scroll';
import { Hexagon } from '../svgIcon/SvgIcon';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import { INavigationElement } from '../../interfaces/interface.component';
import styles from './NavigationElement.module.scss';

const NavigationElement = (props: INavigationElement): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { isLarge, isMedium, handleSoundClick, handleSoundModal, setNavigationMobile } = contextApp;
    const { pageName } = props;

    const switchPage = (): void => {
        setNavigationMobile(false);

        if (isLarge || isMedium) {
            handleSoundModal();
        } else {
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

export default NavigationElement;
