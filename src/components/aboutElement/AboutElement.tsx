import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import styles from './AboutElement.module.scss';

interface IAboutElement {
    title: string;
    text: string;
}

const AboutElement = (props: IAboutElement): React.JSX.Element => {
    return (
        <div className={styles.item}>
            <Heading className={styles.item__title} level="3" textContent={props.title} />
            <Paragraph className={styles.item__text} textContent={props.text} />
        </div>
    );
};

export default AboutElement;
