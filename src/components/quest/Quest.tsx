import React from 'react';
import styles from './Quest.module.scss';
import { QuestElement } from '../questElement/QuestElement';
import { Setting } from '../setting/Setting';

const Quest = (): React.JSX.Element => {
    return (
        <aside className={styles.aside}>
            <div className={styles.quest}>
                <QuestElement
                    className={{ header: styles.quest__active_title, text: styles.quest__active_text }}
                    hexagon={true}
                    text="the react skill-up line"
                    textTitle="active quest"
                />
                <QuestElement
                    className={{ header: styles.quest__title, text: styles.quest__name_text }}
                    hexagon={false}
                    text="React"
                    textTitle="quest name"
                />
                <QuestElement
                    className={{ header: styles.quest__title, text: styles.quest__goal_text }}
                    hexagon={false}
                    text="Completely master the React library, as well as all its add-ons: Redux, NextJS and etc."
                    textTitle="goal"
                />
            </div>
            <Setting className={styles} />
        </aside>
    );
};

export { Quest };
