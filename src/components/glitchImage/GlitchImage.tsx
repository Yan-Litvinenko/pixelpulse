import React from 'react';
import glitchEffect from '../../assets/audio/glitch.mp3';
import { useAppContext } from '../../hooks/useAppContext';

interface GlitchCanvasProps {
    className: string;
    imageUrl: string;
    maxDelay: number;
    minDelay: number;
}

const GlitchImage: React.FC<GlitchCanvasProps> = ({ imageUrl, className, minDelay, maxDelay }) => {
    const { sounds } = useAppContext();
    const actualSoundState = React.useRef<boolean | undefined>(sounds);
    const timer = React.useRef<NodeJS.Timeout | null>(null);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const imgRef = React.useRef<HTMLImageElement>(new Image());
    const countRender = React.useRef<number>(1);
    const cachedImage = React.useRef<HTMLImageElement | null>(null);

    const audio: HTMLAudioElement = new Audio(glitchEffect);
    audio.volume = 0.1;

    const getRandomDelay = (): number => {
        return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    };

    const glitchImage = React.useCallback((): void => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | undefined | null = canvas?.getContext('2d');
        const img: HTMLImageElement | null = cachedImage.current;

        if (!canvas || !ctx || !img) return;

        if (timer.current) clearTimeout(timer.current);

        for (let i = 0; i < 5; i++) {
            const x: number = Math.random() * canvas.width;
            const y: number = Math.random() * canvas.height;
            const spliceWidth: number = canvas.width * (0.1 + Math.random() * 0.3);
            const spliceHeight: number = canvas.height * 0.1;

            ctx.drawImage(
                canvas,
                x,
                y,
                spliceWidth,
                spliceHeight,
                x + (Math.random() - 0.5) * 20,
                y + (Math.random() - 0.5) * 10,
                spliceWidth,
                spliceHeight,
            );
        }

        for (let i = 0; i < 5; i++) {
            const x: number = Math.random() * canvas.width;
            const y: number = Math.random() * canvas.height;
            const spliceWidth: number = canvas.width * (0.1 + Math.random() * 0.3);
            const spliceHeight: number = canvas.height * 0.1;

            ctx.globalCompositeOperation = 'lighter';
            ctx.drawImage(
                canvas,
                x,
                y,
                spliceWidth,
                spliceHeight,
                x + (Math.random() - 0.5) * 20,
                y + (Math.random() - 0.5) * 10,
                spliceWidth,
                spliceHeight,
            );
            ctx.globalCompositeOperation = 'source-over';
        }

        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);

            if (countRender.current > 2 && actualSoundState.current) {
                audio.play();
            }
        }, 100);

        countRender.current++;
        timer.current = setTimeout(glitchImage, getRandomDelay());
    }, [maxDelay, minDelay]);

    React.useEffect(() => {
        if (cachedImage.current) {
            glitchImage();
            return;
        }

        const img = imgRef.current;
        img.src = imageUrl;
        img.onload = (): void => {
            const canvas: HTMLCanvasElement | null = canvasRef.current;
            if (canvas) {
                canvas.width = img.width;
                canvas.height = img.height;
                cachedImage.current = img;
                glitchImage();
            }
        };

        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, [imageUrl, glitchImage]);

    React.useEffect(() => {
        actualSoundState.current = sounds;
    }, [sounds]);

    return (
        <>
            <canvas className={className} ref={canvasRef} />
        </>
    );
};

export default React.memo(GlitchImage);
