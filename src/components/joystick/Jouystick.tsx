import React from 'react';
import { JoystickDown, JoystickLeft, JoystickRight, JoystickUp } from '../svgIcon/SvgIcon';
import styles from './Joystick.module.scss';

interface IJouystick {
    className: string;
    down: () => void;
    left: () => void;
    right: () => void;
    up: () => void;
}

const Joystick = (props: IJouystick): React.JSX.Element => {
    return (
        <>
            <div className={`${styles.circle} ${props.className}`}>
                <JoystickDown down={props.down} />
                <JoystickLeft left={props.left} />
                <JoystickRight right={props.right} />
                <JoystickUp up={props.up} />
            </div>
        </>
    );
};

export default Joystick;
