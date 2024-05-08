import React from 'react';
import Heading from '../heading/Heading';
import { Hexagon } from '../svgIcon/SvgIcon';

interface IQuestElement {
    className: {
        header: string;
        text: string;
    };
    hexagon: boolean;
    text: string;
    textTitle: string;
}

const getHexagon = (): React.JSX.Element => <Hexagon />;

const QuestElement = (props: IQuestElement): React.JSX.Element => {
    return (
        <div>
            <Heading
                className={props.className.header}
                level={'3'}
                textContent={props.textTitle}
                image={props.hexagon ? getHexagon : undefined}
            />
            <span className={props.className.text}>{props.text}</span>
        </div>
    );
};

export default QuestElement;
