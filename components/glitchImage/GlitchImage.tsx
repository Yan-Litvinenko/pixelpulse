'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { soundsGlitchTrigger } from '@/redux/slice/soundsSlice';

interface GlitchCanvasProps {
    className: string;
    imageUrl: string;
    maxDelay: number;
    minDelay: number;
}

const GlitchImage: React.FC<GlitchCanvasProps> = ({ imageUrl, className, minDelay, maxDelay }) => {
    const dispatch = useDispatch();
    const timer = React.useRef<NodeJS.Timeout | null>(null);
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const imgRef = React.useRef<HTMLImageElement | null>(null);
    const countRender = React.useRef<number>(1);

    const getRandomDelay = (): number => Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    const glitchImage = React.useCallback((): void => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = imgRef.current;

        if (!canvas || !ctx || !img) return;

        if (timer.current) clearTimeout(timer.current);

        for (let i = 0; i < 5; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const spliceWidth = canvas.width * (0.1 + Math.random() * 0.3);
            const spliceHeight = canvas.height * 0.1;

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

        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            if (countRender.current > 2) {
                dispatch(soundsGlitchTrigger());
            }
        }, 100);

        countRender.current++;
        timer.current = setTimeout(glitchImage, getRandomDelay());
    }, [maxDelay, minDelay]);

    React.useEffect(() => {
        if (typeof window === 'undefined') return;

        const img = new Image();
        img.src = imageUrl;
        img.onload = (): void => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = img.width;
                canvas.height = img.height;
                imgRef.current = img;
                glitchImage();
            }
        };

        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, [imageUrl, glitchImage]);

    return <canvas className={className} ref={canvasRef} />;
};

export default GlitchImage;
