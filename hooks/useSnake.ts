import React from 'react';
import getValueToLocalStorage from '@/helpers/getValueToLocalStorage';
import setValueToLocalStorage from '@/helpers/setValueToLocalStorage';
import { musicSelector } from '@/redux/selectors';
import { setActiveMusicTheme } from '@/redux/slice/musicSlice';
import { Snake } from '@/helpers/Snake';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

interface UseSnake {
    bestScore: number;
    canvas: React.MutableRefObject<HTMLCanvasElement | null>;
    score: number;
    snake: React.MutableRefObject<Snake | null>;
}

const KEY_SNAKE_LOCALSTORAGE: string = 'snake-best-score';

export default function useSnake(): UseSnake {
    const dispatch = useDispatch<AppDispatch>();
    const [score, setScore] = React.useState<number>(0);
    const [bestScore, setBestScore] = React.useState<number>(getValueToLocalStorage(KEY_SNAKE_LOCALSTORAGE, 0));
    const { linkSnakeMusic, linkAutomataMusic } = useSelector(musicSelector);

    const snake = React.useRef<null | Snake>(null);
    const canvas = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        dispatch(setActiveMusicTheme(linkSnakeMusic));

        if (canvas.current) snake.current = new Snake(canvas.current);

        const eventKeyboard = (event: KeyboardEvent): void => {
            if (snake.current) snake.current.eventKeyboard(event);
        };

        window.addEventListener('keydown', eventKeyboard);

        setInterval(() => {
            const updateScore: number = snake.current!.score;

            if (updateScore > bestScore) {
                setBestScore(updateScore);
                setValueToLocalStorage(KEY_SNAKE_LOCALSTORAGE, updateScore);
            }
            setScore(updateScore);
        }, 100);

        if (snake.current) snake.current.gameLoop();

        return () => {
            if (snake.current) clearInterval(snake.current.intervalId!);
            window.removeEventListener('keydown', eventKeyboard);
            dispatch(setActiveMusicTheme(linkAutomataMusic));
        };
    }, [dispatch]);

    return {
        score,
        bestScore,
        snake,
        canvas,
    };
}
