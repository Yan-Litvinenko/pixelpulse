import React from 'react';
import styles from '@/styles/components/joystick/Joystick.module.scss';
import { JoystickDown, JoystickLeft, JoystickRight, JoystickUp } from '../svgIcon/SvgIcon';
import type { JouystickProps } from '@/interface/games/games.interface';

export default function Joystick(props: JouystickProps): React.JSX.Element {
    const { down, up, left, right } = props;

    const vibrate = (): void => {
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
            <article className={styles.circle}>
                <JoystickDown down={handleDown} />
                <JoystickLeft left={handleLeft} />
                <JoystickRight right={handleRight} />
                <JoystickUp up={handleUp} />
            </article>
        </>
    );
}
