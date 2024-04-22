import React from 'react';
import { MouseEventHandler } from 'react';

interface IButton {
    className: string;
    image?: () => React.ReactNode;
    onClick: MouseEventHandler;
    textContent: string;
}

const Button = (props: IButton): React.JSX.Element => {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.textContent}
            {props.image && props.image()}
        </button>
    );
};

export default Button;
