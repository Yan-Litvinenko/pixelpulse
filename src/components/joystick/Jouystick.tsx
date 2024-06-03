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
    const vibrate = () => {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    };

    const down = () => {
        props.down();
        vibrate();
    };

    const left = () => {
        props.left();
        vibrate();
    };

    const right = () => {
        props.right();
        vibrate();
    };

    const up = () => {
        props.up();
        vibrate();
    };

    return (
        <>
            <div className={`${styles.circle} ${props.className}`}>
                <JoystickDown down={down} />
                <JoystickLeft left={left} />
                <JoystickRight right={right} />
                <JoystickUp up={up} />
            </div>
        </>
    );
};

export default Joystick;
