import React from 'react';
import useLogsUpdate from '../../hooks/useLogsUpdate';
import Button from '../button/Button';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import { nanoid } from 'nanoid';
import styles from './LogsUpdate.module.scss';

const update: Record<string, string>[] = [
    {
        title: 'project update',
        text: 'I continue to actively work to improve quality and expand capabilities. We are constantly working to improve code readability/structure/performance',
    },
    {
        title: 'Challenges',
        text: 'I AM CONFIDENT THAT WITH MY KNOWLEDGE AND RESOURCES I WILL OVERCOME ALL OBSTACLES ON THE PATH TO SUCCESS. I BELIEVE THAT EVERY CHALLENGE IS AN OPPORTUNITY TO GROW AND IMPROVE.',
    },
    {
        title: 'NEXT STEPS',
        text: 'Creation of 3D animations and mini-games. Adding more flexible settings. Creating and adding pet projects that will tell about my skills.',
    },
    {
        title: 'CONCLUSION',
        text: 'IN CONCLUSION, I WOULD LIKE TO SAY THAT MY PROJECT REPRESENTS MY PASSION AND DILIGENCE. I AM EXCITED TO SEE THE IMPACT IT WILL HAVE AND AM COMMITTED TO CONTINUING TO STRIVE FOR EXCELLENCE.',
    },
];

const LogsUpdate = (): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { handleSoundClick, isLarge } = contextApp;

    const [expandStates, clippedIndexes, setExpandStates, textRefs] = useLogsUpdate(update, styles.element__text_clip);

    const detail = (index: number): void => {
        setExpandStates((prevStates) => {
            const newStates: boolean[] = [...prevStates];
            newStates[index] = !prevStates[index];
            return newStates;
        });
        handleSoundClick();
    };

    return (
        <div className={styles.update}>
            {update.map((element, index) => {
                return (
                    <div className={styles.element} key={nanoid()}>
                        <div className={styles.border}></div>
                        <h3 className={styles.element__title}>{element.title}</h3>
                        <p
                            className={`${styles.element__text} ${expandStates[index] ? '' : styles.element__text_clip}`}
                            ref={(el) => (textRefs.current[index] = el)}
                        >
                            {element.text}
                        </p>

                        {isLarge ? (
                            clippedIndexes.includes(index) ? (
                                <Button
                                    className={`${styles.element__expend}
                             ${clippedIndexes.includes(index) ? null : styles.element__expend_deactive}`}
                                    delayEvent={false}
                                    handleButton={clippedIndexes.includes(index) ? () => detail(index) : () => {}}
                                    textContent={expandStates[index] ? '-collapse' : '+expand'}
                                    type="button"
                                />
                            ) : null
                        ) : (
                            <Button
                                className={`${styles.element__expend}
                         ${clippedIndexes.includes(index) ? null : styles.element__expend_deactive}`}
                                delayEvent={false}
                                handleButton={clippedIndexes.includes(index) ? () => detail(index) : () => {}}
                                textContent={expandStates[index] ? '-collapse' : '+expand'}
                                type="button"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default LogsUpdate;
