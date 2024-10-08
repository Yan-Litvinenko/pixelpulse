type LOCAL_STORAGE_KEY = 'yan-litvinenko-cv-size' | 'yan-litvinenko-cv-hue' | 'yan-litvinenko-cv-image-color';
type CSS_VARIABLE = '--size' | '--data-hue' | '--data-image-color';

class Settings {
    private readonly CSS: CSSStyleDeclaration;

    private readonly SIZE_LS_KEY: LOCAL_STORAGE_KEY;
    private readonly COLOR_LS_KEY: LOCAL_STORAGE_KEY;
    private readonly COLOR_IMAGE_LS_KEY: LOCAL_STORAGE_KEY;

    private readonly DEFAULT_SIZE: string = '16px';
    private readonly DEFAULT_COLOR: string = '0';
    private readonly DEFAULT_COLOR_IMAGE: string = '0deg';

    private readonly VAR_CSS_SIZE: CSS_VARIABLE;
    private readonly VAR_CSS_COLOR: CSS_VARIABLE;
    private readonly VAR_CSS_COLOR_IMAGE: CSS_VARIABLE;

    private SIZE: string = this.DEFAULT_SIZE;
    private COLOR: string = this.DEFAULT_COLOR;
    private COLOR_IMAGE: string = this.DEFAULT_COLOR_IMAGE;

    constructor() {
        this.CSS = document.documentElement.style;

        this.SIZE_LS_KEY = 'yan-litvinenko-cv-size';
        this.COLOR_LS_KEY = 'yan-litvinenko-cv-hue';
        this.COLOR_IMAGE_LS_KEY = 'yan-litvinenko-cv-image-color';

        this.VAR_CSS_SIZE = '--size';
        this.VAR_CSS_COLOR = '--data-hue';
        this.VAR_CSS_COLOR_IMAGE = '--data-image-color';

        this.init();
    }

    init(): void {
        this.SIZE = this.getLocalStorageValue(this.SIZE_LS_KEY, this.DEFAULT_SIZE);
        this.COLOR = this.getLocalStorageValue(this.COLOR_LS_KEY, this.DEFAULT_COLOR);
        this.COLOR_IMAGE = this.getLocalStorageValue(this.COLOR_IMAGE_LS_KEY, this.DEFAULT_COLOR_IMAGE);

        this.setCssVariableValue(this.VAR_CSS_SIZE, this.SIZE);
        this.setCssVariableValue(this.VAR_CSS_COLOR, this.COLOR);
        this.setCssVariableValue(this.VAR_CSS_COLOR_IMAGE, this.COLOR_IMAGE);
    }

    save(): void {
        this.setLocalStorageValue(this.SIZE_LS_KEY, this.getCssVariableValue(this.VAR_CSS_SIZE));
        this.setLocalStorageValue(this.COLOR_LS_KEY, this.getCssVariableValue(this.VAR_CSS_COLOR));
        this.setLocalStorageValue(this.COLOR_IMAGE_LS_KEY, this.getCssVariableValue(this.VAR_CSS_COLOR_IMAGE));
    }

    default(): void {
        this.SIZE = this.DEFAULT_SIZE;
        this.COLOR = this.DEFAULT_COLOR;
        this.COLOR_IMAGE = this.DEFAULT_COLOR_IMAGE;

        this.setLocalStorageValue(this.COLOR_IMAGE_LS_KEY, this.DEFAULT_COLOR_IMAGE);
        this.setLocalStorageValue(this.COLOR_LS_KEY, this.DEFAULT_COLOR);
        this.setLocalStorageValue(this.SIZE_LS_KEY, this.DEFAULT_SIZE);

        this.setCssVariableValue(this.VAR_CSS_SIZE, this.DEFAULT_SIZE);
        this.setCssVariableValue(this.VAR_CSS_COLOR, this.DEFAULT_COLOR);
        this.setCssVariableValue(this.VAR_CSS_COLOR_IMAGE, this.DEFAULT_COLOR_IMAGE);
    }

    changeValueInputColor(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setCssVariableValue(this.VAR_CSS_COLOR, String(Number(event.target.value) * 2.5));
        this.setCssVariableValue(this.VAR_CSS_COLOR_IMAGE, String(`${Number(event.target.value) * 2.5}deg`));
    }

    changeValueInputSize(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setCssVariableValue(this.VAR_CSS_SIZE, `${16 + (Number(event.target.value) / 100) * (56 - 16)}px`);
    }

    getSizeInputValue(): number {
        return ((Number(this.SIZE.replace(/px/g, '')) - 16) / (56 - 16)) * 100;
    }

    getColorInputValue(): number {
        return Number(this.COLOR) / 2.5;
    }

    getLocalStorageValue(key: LOCAL_STORAGE_KEY, defaultValue: string): string {
        const data: string | null = localStorage.getItem(key);
        return data || defaultValue;
    }

    setLocalStorageValue(key: LOCAL_STORAGE_KEY, value: string): void {
        localStorage.setItem(key, value);
    }

    setCssVariableValue(variable: CSS_VARIABLE, value: string): void {
        this.CSS.setProperty(variable, value);
    }

    getCssVariableValue(variable: CSS_VARIABLE): string {
        return this.CSS.getPropertyValue(variable);
    }
}

export default Settings;
