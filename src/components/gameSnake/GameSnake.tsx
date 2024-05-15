import React from 'react';
import Snake from '../../utils/Snake';
import Heading from '../heading/Heading';
import Joystick from '../joystick/Jouystick';
import styles from './GameSnake.module.scss';

const GameSnake = (): React.JSX.Element => {
    const [score, setScore] = React.useState(0);
    const snake = React.useRef<null | Snake>(null);
    const canvas = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        if (canvas.current) {
            snake.current = new Snake(canvas.current);
        }

        const eventKeyboard = (event: KeyboardEvent) => {
            if (snake.current) {
                snake.current.eventKeyboard(event);
            }
        };

        setInterval(() => {
            window.addEventListener('keydown', eventKeyboard, { once: true });
            setScore(snake.current!.score);
        }, 220);

        if (snake.current) {
            snake.current?.gameLoop();
        }

        return () => {
            window.removeEventListener('keydown', eventKeyboard);
            clearInterval(snake.current?.intervalId!);
        };
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <Joystick
                    className={styles.joystick}
                    down={() => snake.current?.setVectorSnake(0, 1, 'y')}
                    left={() => snake.current?.setVectorSnake(-1, 0, 'x')}
                    right={() => snake.current?.setVectorSnake(1, 0, 'x')}
                    up={() => snake.current?.setVectorSnake(0, -1, 'y')}
                />
                <Heading className={styles.title} level="3" textContent={`score:${score}`} />
                <canvas className={styles.canvas} width="300" height="300" ref={canvas}></canvas>
                <a className={styles.back} href="">
                    back to all games<span className={styles.back__quotes}>&#xBB;</span>
                </a>
            </div>
        </>
    );
};

export default GameSnake;
