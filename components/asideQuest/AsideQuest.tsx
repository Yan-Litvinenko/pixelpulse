import React from 'react';
import QuestElement from '../questElement/QuestElement';
import Setting from '../questSetting/QuestSetting';
import styles from '@/styles/components/asideQuest/AsideQuest.module.scss';

export default function AsideQuest(): React.JSX.Element {
    return (
        <aside className={styles.aside}>
            <div className={styles.quest}>
                <QuestElement
                    hexagon={true}
                    text="the react skill-up line"
                    title="active quest"
                    className={{ title: styles.quest__active_title, text: styles.quest__active_text }}
                />
                <QuestElement
                    hexagon={false}
                    text="React"
                    title="quest name"
                    className={{ title: styles.quest__title, text: styles.quest__name_text }}
                />
                <QuestElement
                    hexagon={false}
                    text="Completely master the React library, as well as all its add-ons: Redux, NextJS and etc."
                    title="goal"
                    className={{
                        title: styles.quest__title,
                        text: styles.quest__goal_text,
                    }}
                />
            </div>
            <Setting />
        </aside>
    );
}
