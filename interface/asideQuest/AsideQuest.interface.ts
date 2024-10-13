export type QuestElementProps = {
    hexagon: boolean;
    text: string;
    title: 'active quest' | 'quest name' | 'goal';
    className: {
        title: string;
        text: string;
    };
};

export type QuestSettingElementProps = {
    classNameElement: string;
    classNameCheckbox: string;
    image: 'status' | 'gear';
    textContent: 'Visual Settings' | 'Music' | 'Sounds Effects';
    onClick: () => void;
};
