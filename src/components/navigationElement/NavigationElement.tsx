import React from 'react';
import Heading from '../heading/Heading';
import Hexagon from '../hexagon/Hexagon';
import Paragraph from '../paragraph/Paragraph';
import { ContextApp } from '../app/App';
import { Page, IAppContext } from '../../interfaces/interface';
import styles from './NavigationElement.module.scss';

interface INavigationElement {
    textContent: Page;
    activeElement: Page;
}

const NavigationElement = ({ textContent, activeElement }: INavigationElement): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const isActive: boolean = textContent === activeElement;

    if (!contextApp) return null;

    const handleNavigationChange = () => {
        if (contextApp.page !== textContent) {
            contextApp.setPage(textContent);
            contextApp.setNavigationMobile(false);
        }
    };

    return (
        <li className={styles.item} onClick={handleNavigationChange}>
            <Heading
                className={`${styles.item__title} ${isActive ? styles.item__title_active : null}`}
                level="4"
                textContent={textContent}
                image={() => <Hexagon />}
            />
            <Paragraph
                className={`${styles.item__text} ${isActive ? styles.item__text_active : null}`}
                textContent="Suscipit est consequatur nemo voluptatem est labore saepe."
            />
        </li>
    );
};

export default NavigationElement;
