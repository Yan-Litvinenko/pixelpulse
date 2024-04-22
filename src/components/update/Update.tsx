import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import { nanoid } from 'nanoid';
import updateData from '../../assets/json/update.json';
import styles from './Update.module.scss';

const Update = (): React.JSX.Element => {
    return (
        <div className={styles.update}>
            {updateData.map((element) => {
                return (
                    <div key={nanoid()} className={styles.element}>
                        <div className={styles.border}></div>
                        <Heading className={styles.element__title} level="3" textContent={element.title} />
                        <Paragraph className={styles.element__text} textContent={element.text} />
                    </div>
                );
            })}
        </div>
    );
};

export default Update;
