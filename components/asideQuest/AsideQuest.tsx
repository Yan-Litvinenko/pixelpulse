import React from 'react';
import QuestElement from '../questElement/QuestElement';
import Setting from '../questSetting/QuestSetting';

export default function AsideQuest(): React.JSX.Element {
    return (
        <aside className={'aside'}>
            <div className={'quest'}>
                <QuestElement
                    hexagon={true}
                    text="the react skill-up line"
                    title="active quest"
                    className={{ title: 'quest__active_title', text: 'quest__active_text' }}
                />
                <QuestElement
                    hexagon={false}
                    text="React"
                    title="quest name"
                    className={{ title: 'quest__title', text: 'quest__name_text' }}
                />
                <QuestElement
                    hexagon={false}
                    text="Completely master the React library, as well as all its add-ons: Redux, NextJS and etc."
                    title="goal"
                    className={{
                        title: 'quest__title',
                        text: 'quest__goal_text',
                    }}
                />
            </div>
            <Setting />
        </aside>
    );
}
