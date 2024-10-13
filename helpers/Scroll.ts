class Scroll {
    private position: number;

    constructor() {
        this.position = 0;
    }

    off(): void {
        this.position = window.scrollY;
        this.setCSSBody({
            position: 'fixed',
            top: `-${this.position}px`,
            width: '100%',
            paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
        });
    }

    on(): void {
        this.setCSSBody({
            position: '',
            top: '',
            width: '',
            paddingRight: '',
        });

        window.scrollTo(0, this.position);
    }

    moveTop(): void {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    private setCSSBody(styles: Record<string, string>): void {
        Object.assign(document.body.style, styles);
    }
}

const scroll: Scroll = new Scroll();

export { scroll };
