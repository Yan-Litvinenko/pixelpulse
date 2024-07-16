import React from 'react';
import { JoystickDown, JoystickLeft, JoystickRight, JoystickUp } from '../svgIcon/SvgIcon';
import { IJouystick } from '../../interfaces/interface.component';
import styles from './Joystick.module.scss';

const Joystick = (props: IJouystick): React.JSX.Element => {
    const { down, up, left, right, className } = props;
    const vibrate = () => {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    };

    const handleDown = (): void => {
        down();
        vibrate();
    };

    const handleLeft = (): void => {
        left();
        vibrate();
    };

    const handleRight = (): void => {
        right();
        vibrate();
    };

    const handleUp = (): void => {
        up();
        vibrate();
    };

    return (
        <>
            <div className={`${styles.circle} ${className}`}>
                <JoystickDown down={handleDown} />
                <JoystickLeft left={handleLeft} />
                <JoystickRight right={handleRight} />
                <JoystickUp up={handleUp} />
            </div>
        </>
    );
};

export default Joystick;
