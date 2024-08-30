import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import type { IQuestElement } from '../../interfaces/interface.component';

const QuestElement = (props: IQuestElement): React.JSX.Element => {
    const { text, textTitle, hexagon, className } = props;
    return (
        <article>
            <h3 className={className.header}>
                {textTitle}
                {hexagon ? <Hexagon /> : null}
            </h3>
            <p className={className.text}>{text}</p>
        </article>
    );
};

export { QuestElement };
