import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import { IQuestElement } from '../../interfaces/interface.component';

const QuestElement = (props: IQuestElement): React.JSX.Element => {
    return (
        <div>
            <h3 className={props.className.header}>
                {props.textTitle}
                {props.hexagon ? <Hexagon /> : null}
            </h3>
            <span className={props.className.text}>{props.text}</span>
        </div>
    );
};

export default QuestElement;
