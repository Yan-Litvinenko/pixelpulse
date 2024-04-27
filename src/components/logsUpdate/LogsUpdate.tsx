import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import { nanoid } from 'nanoid';
import styles from './LogsUpdate.module.scss';

const data = [
    {
        title: 'project update',
        text: 'The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing.',
    },
    {
        title: 'Challenges',
        text: 'The team has encountered several challenges during the development process, including unexpected system crashes, hardware malfunctions, and unanticipated compatibility issues...',
    },
    {
        title: 'NEXT STEPS',
        text: 'The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing.',
    },
    {
        title: 'CONCLUSION',
        text: 'Despite the challenges encountered, the team remains optimistic about the potential of the project. The development of advanced neural interfaces and machine learning algorithms ...',
    },
];

const LogsUpdate = (): React.JSX.Element => {
    return (
        <div className={styles.update}>
            {data.map((element) => {
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

export default LogsUpdate;
