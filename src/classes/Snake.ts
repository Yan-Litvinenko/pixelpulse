interface Coordinates {
    x: number;
    y: number;
}

class Snake {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private gridSize: number;
    private cellCount: number;

    private snake: Coordinates[];
    private apple: Coordinates;
    private vectorSnake: Coordinates;

    private isGameOver: boolean;

    score: number;
    intervalId: NodeJS.Timeout | null;

    constructor(canvas: HTMLCanvasElement) {
        const [snake, apple] = this.objectsPosition();

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;

        this.gridSize = 20;
        this.cellCount = this.canvas.width / this.gridSize;

        this.snake = [
            {
                x: snake,
                y: snake,
            },
        ];

        this.apple = {
            x: apple,
            y: apple,
        };

        this.vectorSnake = {
            x: 0,
            y: 0,
        };

        this.score = 0;
        this.intervalId = null;

        this.isGameOver = false;
    }

    objectsPosition(): [number, number] {
        const snake: number = this.getRandomInt(8, 15);
        const apple: number = this.getRandomInt(1, 7);

        return [snake, apple];
    }

    private restart(): void {
        const [snake, apple] = this.objectsPosition();

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.snake = [
            {
                x: snake,
                y: snake,
            },
        ];

        this.apple = {
            x: apple,
            y: apple,
        };

        this.score = 0;
    }

    private drawGame(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = `rgba(${this.getColor()}, 0.3)`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawGrid();
        this.drawCells();
        this.drawSnake();
        this.drawApple();
    }

    private drawGrid(): void {
        this.ctx.strokeStyle = `rgba(${this.getColor}, 0.5)`;

        for (let x = 0; x <= this.canvas.width; x += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        for (let y = 0; y <= this.canvas.height; y += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }

    private drawCells(): void {
        this.ctx.fillStyle = `rgba(${this.getColor()}, 0.2)`;

        for (let x = 0; x < this.cellCount; x++) {
            for (let y = 0; y < this.cellCount; y++) {
                this.ctx.fillRect(x * this.gridSize + 4, y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
            }
        }
    }

    private drawSnake(): void {
        this.ctx.fillStyle = `rgba(${this.getColor()}, 0.8)`;
        this.ctx.strokeStyle = `rgba(${this.getColor()}, 0.8)`;

        this.snake.forEach((snakeItem) => {
            const x: number = snakeItem.x * this.gridSize;
            const y: number = snakeItem.y * this.gridSize;

            this.ctx.strokeRect(x, y, this.gridSize, this.gridSize);
            this.ctx.fillRect(x + 4, y + 4, this.gridSize - 8, this.gridSize - 8);
        });
    }

    private drawApple(): void {
        this.ctx.fillStyle = `rgb(${this.getColor()})`;
        this.ctx.strokeStyle = `rgb(${this.getColor()})`;

        const x: number = this.apple.x * this.gridSize;
        const y: number = this.apple.y * this.gridSize;

        this.ctx.strokeRect(x, y, this.gridSize, this.gridSize);
        this.ctx.fillRect(x + 4, y + 4, this.gridSize - 8, this.gridSize - 8);
    }

    private isAppleInsideSnake(x: number, y: number): boolean {
        for (let i = 0; i < this.snake.length; i++) {
            if (this.snake[i].x === x && this.snake[i].y === y) {
                return true;
            }
        }
        return false;
    }

    private impactSnake(head: Coordinates): void {
        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                alert('Game Over! You collided with yourself.');
                this.isGameOver = true;
                this.restart();
                return;
            }
        }
    }

    private moveSnake(head: Coordinates): void {
        if (!this.isGameOver) {
            this.snake.unshift(head);

            if (head.x === this.apple.x && head.y === this.apple.y) {
                let newAppleX: number, newAppleY: number;

                do {
                    newAppleX = Math.floor(Math.random() * this.cellCount);
                    newAppleY = Math.floor(Math.random() * this.cellCount);
                } while (this.isAppleInsideSnake(newAppleX, newAppleY));

                this.apple.x = newAppleX;
                this.apple.y = newAppleY;

                this.score += 1;
            } else {
                this.snake.pop();
            }
        }
    }

    private goingAbroad(head: Coordinates): void {
        if (head.x < 0) {
            head.x = this.cellCount - 1;
        } else if (head.x >= this.cellCount) {
            head.x = 0;
        }

        if (head.y < 0) {
            head.y = this.cellCount - 1;
        } else if (head.y >= this.cellCount) {
            head.y = 0;
        }
    }

    private updateGame(): void {
        const head: Coordinates = { x: this.snake[0].x + this.vectorSnake.x, y: this.snake[0].y + this.vectorSnake.y };

        this.goingAbroad(head);
        this.impactSnake(head);
        this.moveSnake(head);
    }

    eventKeyboard(event: KeyboardEvent): void {
        if (this.isGameOver) {
            this.isGameOver = false;
            this.gameLoop();
        }

        if ((event.key === 'w' || event.key === 'ц') && this.vectorSnake.y == 0) {
            this.vectorSnake.x = 0;
            this.vectorSnake.y = -1;
        }
        if ((event.key === 's' || event.key === 'ы') && this.vectorSnake.y === 0) {
            this.vectorSnake.x = 0;
            this.vectorSnake.y = 1;
        }
        if ((event.key === 'a' || event.key === 'ф') && this.vectorSnake.x === 0) {
            this.vectorSnake.x = -1;
            this.vectorSnake.y = 0;
        }
        if ((event.key === 'd' || event.key === 'в') && this.vectorSnake.x === 0) {
            this.vectorSnake.x = 1;
            this.vectorSnake.y = 0;
        }
    }

    setVectorSnake(x: number, y: number, vector: 'x' | 'y'): void {
        if (vector === 'x') {
            if (this.vectorSnake.x === 0) {
                this.vectorSnake.x = x;
                this.vectorSnake.y = y;
            }
        }

        if (vector === 'y') {
            if (this.vectorSnake.y === 0) {
                this.vectorSnake.x = x;
                this.vectorSnake.y = y;
            }
        }
    }

    gameLoop(): void {
        this.intervalId = setInterval(() => {
            this.updateGame();
            this.drawGame();
        }, 220);
    }

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private getColor(): string {
        const r: string = getComputedStyle(document.documentElement).getPropertyValue('--data-hue');
        const g: string = getComputedStyle(document.documentElement).getPropertyValue('--data-saturation');
        const b: string = getComputedStyle(document.documentElement).getPropertyValue('--data-lightness');

        return `${r}, ${g}, ${b}`;
    }
}

export default Snake;
