import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import glitchEffect from '../../assets/audio/glitch.mp3';

interface GlitchCanvasProps {
    className: string;
    imageUrl: string;
    maxDelay: number;
    minDelay: number;
}

const GlitchCanvas: React.FC<GlitchCanvasProps> = ({ imageUrl, className, minDelay, maxDelay }) => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const timer = React.useRef<NodeJS.Timeout | null>(null);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const imgRef = React.useRef<HTMLImageElement>(new Image());
    const countRender = React.useRef<number>(1);

    const audio: HTMLAudioElement = new Audio(glitchEffect);
    audio.volume = 0.04;

    const getRandomDealy = (): number => {
        return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    };

    React.useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if (!ctx) return;
        const img: HTMLImageElement = imgRef.current;

        const glitchImage = (): void => {
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

                if (countRender.current > 2 && contextApp?.sounds) {
                    audio.play();
                }
            }, 100);

            countRender.current++;
            timer.current = setTimeout(glitchImage, getRandomDealy());
        };

        img.src = imageUrl;
        img.onload = (): void => {
            canvas.width = img.width;
            canvas.height = img.height;
            glitchImage();
        };

        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, [imageUrl]);

    return <canvas className={className} ref={canvasRef} />;
};

export default GlitchCanvas;
