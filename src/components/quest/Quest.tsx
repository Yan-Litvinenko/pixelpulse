import React from 'react';
import QuestElement from '../questElement/QuestElement';
import Setting from '../setting/Setting';
import styles from './Quest.module.scss';

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
                    text="React website"
                    textTitle="quest name"
                />
                <QuestElement
                    className={{ header: styles.quest__title, text: styles.quest__goal_text }}
                    hexagon={false}
                    text="Build this website. Implement a full react website with multiple routers, UI elements and tricky styling. Make it all work great!"
                    textTitle="goal"
                />
            </div>
            <Setting className={styles} />
        </aside>
    );
};

export default Quest;
