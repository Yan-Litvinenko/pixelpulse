import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import type { QuestElementProps } from '@/interface/asideQuest/AsideQuest.interface';

export default function QuestElement(props: QuestElementProps): React.JSX.Element {
    const { text, title, hexagon, className } = props;
    return (
        <article>
            <h3 className={className.title}>
                {title}
                {hexagon ? <Hexagon /> : null}
            </h3>
            <p className={className.text}>{text}</p>
        </article>
    );
}
