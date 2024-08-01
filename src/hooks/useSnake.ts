import React from 'react';
import { Snake } from '../classes/Snake';
import { useLocalStorage } from './useLocalStorage';
import { useAppContext } from './useAppContext';
import mainTheme from '../assets/audio/main-theme.mp3';
import snakeTheme from '../assets/audio/snake.mp3';

interface UseSnake {
    score: number;
    bestScore: number;
    snake: React.MutableRefObject<Snake | null>;
    canvas: React.MutableRefObject<HTMLCanvasElement | null>;
}

const useSnake = (): UseSnake => {
    const { mainMusic } = useAppContext();
    const [score, setScore] = React.useState(0);
    const [bestScore, setBestScore] = useLocalStorage(0, 'yan-litvinenko-cv-snake-best-score');
    const snake = React.useRef<null | Snake>(null);
    const canvas = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        mainMusic.selectTrack(snakeTheme);

        if (canvas.current) snake.current = new Snake(canvas.current);

        const eventKeyboard = (event: KeyboardEvent): void => {
            if (snake.current) snake.current.eventKeyboard(event);
        };

        window.addEventListener('keydown', eventKeyboard);

        setInterval(() => {
            const updateScore: number = snake.current!.score;

            if (updateScore > bestScore) {
                setBestScore(updateScore);
            }

            setScore(updateScore);
        }, 100);

        if (snake.current) snake.current.gameLoop();

        return () => {
            if (snake.current) clearInterval(snake.current.intervalId!);
            window.removeEventListener('keydown', eventKeyboard);
            mainMusic.selectTrack(mainTheme);
        };
    }, [snake.current, canvas.current]);

    return {
        score,
        bestScore,
        snake,
        canvas,
    };
};

export { useSnake };
