import React from 'react';
import useLogsUpdate from '../../hooks/useLogsUpdate';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import styles from './LogsUpdate.module.scss';

const update: Record<string, string>[] = [
    {
        title: 'project update',
        text: "My project is at a very exciting stage of development. I continue to actively work on key aspects and move forward confidently. I'm implementing new ideas and improving current solutions to reach my goals faster and more efficiently. My efforts are focused on enhancing quality and expanding opportunities.",
    },
    {
        title: 'Challenges',
        text: 'Like in any ambitious project, I face my own challenges. I confront them openly and concentrate my efforts on solving them. Every challenge is an opportunity to grow and improve. I am confident that with my knowledge and resources, I will overcome all obstacles on the path to success.',
    },
    {
        title: 'NEXT STEPS',
        text: 'My plans for the near future are ambitious yet realistic. I am focusing on key stages that will lead me to desired outcomes. I plan to intensively develop specific project aspects and implement new strategies to achieve my goals.',
    },
    {
        title: 'CONCLUSION',
        text: 'In conclusion, my project embodies my passion and diligence. I continue to move forward, regardless of any obstacles, and I am confident in a successful outcome. I thank everyone who supports me on this journey. My goal is to create something unique and inspiring, and I will put forth all efforts to achieve it.',
    },
];

const LogsUpdate = (): React.JSX.Element => {
    const [expandStates, clippedIndexes, setExpandStates, textRefs] = useLogsUpdate(update, styles.element__text_clip);
    const handleExpand = React.useCallback((index: number): void => {
        return setExpandStates((prevStates) => {
            const newStates: boolean[] = [...prevStates];
            newStates[index] = !prevStates[index];
            return newStates;
        });
    }, []);

    return (
        <div className={styles.update}>
            {update.map((element, index) => {
                return (
                    <div className={styles.element} key={nanoid()}>
                        <div className={styles.border}></div>
                        <Heading className={styles.element__title} level="3" textContent={element.title} />
                        <p
                            className={`${styles.element__text} ${expandStates[index] ? '' : styles.element__text_clip}`}
                            ref={(el) => (textRefs.current[index] = el)}
                        >
                            {element.text}
                        </p>
                        {clippedIndexes.includes(index) ? (
                            <Button
                                className={styles.element__expend}
                                delayEvent={false}
                                handleButton={() => handleExpand(index)}
                                textContent={expandStates[index] ? '-collapse' : '+expand'}
                                type="button"
                            />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default LogsUpdate;
