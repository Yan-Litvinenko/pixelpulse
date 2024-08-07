import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import type { IQuestElement } from '../../interfaces/interface.component';

const QuestElement = (props: IQuestElement): React.JSX.Element => {
    const { text, textTitle, hexagon, className } = props;
    return (
        <div>
            <h3 className={className.header}>
                {textTitle}
                {hexagon ? <Hexagon /> : null}
            </h3>
            <span className={className.text}>{text}</span>
        </div>
    );
};

export { QuestElement };
