import React from 'react';
import Snake from '../../utils/Snake';
import Heading from '../heading/Heading';
import styles from './GameSnake.module.scss';

const GameSnake = (): React.JSX.Element => {
    const [score, setScore] = React.useState(0);
    const canvas = React.useRef<HTMLCanvasElement | null>(null);
    const oneStartGame = React.useRef<boolean>(false);

    React.useEffect(() => {
        const snake = new Snake(canvas.current!);
        const addEventListenerSnake = (event: KeyboardEvent) => snake.addEventListener(event);

        setInterval(() => {
            window.addEventListener('keydown', addEventListenerSnake, { once: true });
        }, 240);

        if (!oneStartGame.current) {
            snake.gameLoop();
            oneStartGame.current = true;
        }

        return () => {
            window.removeEventListener('keydown', addEventListenerSnake);
        };
    }, []);
    return (
        <>
            <div className={styles.wrapper}>
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
