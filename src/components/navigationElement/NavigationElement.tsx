import React from 'react';
import { ContextApp } from '../app/App';
import { NavLink } from 'react-router-dom';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import scroll from '../../classes/Scroll';
import { Hexagon } from '../svgIcon/SvgIcon';
import { Page, IAppContext } from '../../interfaces/interface';
import styles from './NavigationElement.module.scss';

interface INavigationElement {
    textContent: Page;
}

const NavigationElement = ({ textContent }: INavigationElement): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return null;

    const handleNavigationChange = (): void => {
        contextApp.setNavigationMobile(false);
        contextApp.handleSoundClick();
        scroll.on();
    };

    return (
        <li onClick={handleNavigationChange}>
            <NavLink
                to={textContent}
                className={({ isActive }) => (isActive ? `${styles.link_active} ${styles.link}` : styles.link)}
            >
                <Heading className={styles.link__title} level="4" textContent={textContent} image={() => <Hexagon />} />
                <Paragraph
                    className={styles.link__text}
                    textContent="Suscipit est consequatur nemo voluptatem est labore saepe."
                />
            </NavLink>
        </li>
    );
};

export default NavigationElement;
