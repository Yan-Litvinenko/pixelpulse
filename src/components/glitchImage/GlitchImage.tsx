import React from 'react';

interface GlitchCanvasProps {
    imageUrl: string;
    maxDelay: number;
    minDelay: number;
    className: string;
}

const GlitchCanvas: React.FC<GlitchCanvasProps> = ({ imageUrl, className, minDelay, maxDelay }) => {
    const timer = React.useRef<NodeJS.Timeout | null>(null);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const imgRef = React.useRef<HTMLImageElement>(new Image());

    const getRandomDealy = () => {
        return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    };

    React.useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if (!ctx) return;
        const img: HTMLImageElement = imgRef.current;

        img.src = imageUrl;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            glitchImage();
        };

        const glitchImage = () => {
            if (timer.current) clearTimeout(timer.current);

            const randomDelay: number = getRandomDealy();

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
            }, 100);

            timer.current = setTimeout(glitchImage, randomDelay);

            return () => {
                if (timer.current) clearTimeout(timer.current);
            };
        };

        requestAnimationFrame(glitchImage);
    }, [imageUrl]);

    return <canvas className={className} ref={canvasRef} />;
};

export default GlitchCanvas;
