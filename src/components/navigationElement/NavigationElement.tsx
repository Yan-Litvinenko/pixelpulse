import React from 'react';
import { ContextApp } from '../app/App';
import { Link } from 'react-router-dom';
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

    const handleNavigationChange = () => {
        contextApp.setNavigationMobile(false);
        contextApp.handleSoundClick();
        scroll.on();
    };

    return (
        <li className={styles.item} onClick={handleNavigationChange}>
            <Link to={textContent}>
                <Heading
                    // className={`${styles.item__title} ${isActive ? styles.item__title_active : null}`}
                    className={styles.item__title}
                    level="4"
                    textContent={textContent}
                    image={() => <Hexagon />}
                />
                <Paragraph
                    // className={`${styles.item__text} ${isActive ? styles.item__text_active : null}`}
                    className={styles.item__text}
                    textContent="Suscipit est consequatur nemo voluptatem est labore saepe."
                />
            </Link>
        </li>
    );
};

export default NavigationElement;
