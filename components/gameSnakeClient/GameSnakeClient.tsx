'use client';

import React from 'react';
import useSnake from '@/hooks/useSnake';
import Joystick from '@/components/joystick/Joystick';
import Link from 'next/link';
import styles from '@/styles/components/game/Game.module.scss';

export default function GameSnakeClient(): React.JSX.Element {
    const { score, bestScore, snake, canvas } = useSnake();

    return (
        <>
            <div className={styles.wrapper}>
                <Joystick
                    down={() => snake.current?.setVectorSnake(0, 1, 'y')}
                    left={() => snake.current?.setVectorSnake(-1, 0, 'x')}
                    right={() => snake.current?.setVectorSnake(1, 0, 'x')}
                    up={() => snake.current?.setVectorSnake(0, -1, 'y')}
                />
                <div className={styles.score}>
                    <span>score:{score}</span>
                    <span>best score:{bestScore}</span>
                </div>
                <canvas className={styles.canvas} width="300" height="300" ref={canvas}></canvas>
                <Link className={styles.back} href={'/games'}>
                    back to all games
                    <span className={styles.back__quotes}>&#xBB;</span>
                </Link>
            </div>
        </>
    );
}
