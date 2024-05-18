export const handleInitSettings = (): void => {
    const hue: string = localStorage.getItem('yan-litvinenko-cv-hue') || '232';
    const saturation: string = localStorage.getItem('yan-litvinenko-cv-saturation') || '64';
    const lightness: string = localStorage.getItem('yan-litvinenko-cv-lightness') || '64';
    const imageColor: string = localStorage.getItem('yan-litvinenko-cv-image-color') || '0deg';
    const size: string = localStorage.getItem('yan-litvinenko-cv-size') || '16px';

    document.documentElement.style.setProperty('--data-hue', hue);
    document.documentElement.style.setProperty('--data-saturation', saturation);
    document.documentElement.style.setProperty('--data-lightness', lightness);
    document.documentElement.style.setProperty('--data-image-color', imageColor);
    document.documentElement.style.setProperty('--size', size);
};

export const handleDefaultSettings = (): void => {
    const hue: string = '232';
    const saturation: string = '64';
    const lightness: string = '64';
    const imageColor: string = '0deg';
    const size: string = '16px';

    document.documentElement.style.setProperty('--data-hue', hue);
    document.documentElement.style.setProperty('--data-saturation', saturation);
    document.documentElement.style.setProperty('--data-lightness', lightness);
    document.documentElement.style.setProperty('--data-image-color', imageColor);
    document.documentElement.style.setProperty('--size', size);
};

export const handleSaveSetting = (): void => {
    const hue: string = getComputedStyle(document.documentElement).getPropertyValue('--data-hue');
    const saturation: string = getComputedStyle(document.documentElement).getPropertyValue('--data-saturation');
    const lightness: string = getComputedStyle(document.documentElement).getPropertyValue('--data-lightness');
    const imageColor: string = getComputedStyle(document.documentElement).getPropertyValue('--data-image-color');
    const size: string = getComputedStyle(document.documentElement).getPropertyValue('--size');

    localStorage.setItem('yan-litvinenko-cv-image-color', imageColor);
    localStorage.setItem('yan-litvinenko-cv-hue', hue);
    localStorage.setItem('yan-litvinenko-cv-saturation', saturation);
    localStorage.setItem('yan-litvinenko-cv-lightness', lightness);
    localStorage.setItem('yan-litvinenko-cv-size', size);
};

export const handleSettingColor = (): ((
    event: React.ChangeEvent<HTMLInputElement>,
    variableName: 'hue' | 'saturation' | 'lightness' | 'size',
) => void) => {
    const rgbToHueRotate = (r: number, g: number, b: number): void => {
        r /= 255;
        g /= 255;
        b /= 255;

        const max: number = Math.max(r, g, b);
        const min: number = Math.min(r, g, b);

        let h: number = 0;

        if (max !== min) {
            if (max === r) {
                h = (g - b) / (max - min);
            } else if (max === g) {
                h = 2 + (b - r) / (max - min);
            } else {
                h = 4 + (r - g) / (max - min);
            }

            h *= 60;

            if (h < 0) {
                h += 360;
            }
        }

        const hueDegrees: number = Math.round(h);
        document.documentElement.style.setProperty(`--data-image-color`, `${hueDegrees}deg`);
    };

    const changeSettingValue = (
        event: React.ChangeEvent<HTMLInputElement>,
        variableName: 'hue' | 'saturation' | 'lightness' | 'size',
    ): void => {
        document.documentElement.style.setProperty(`--data-${variableName}`, String(Number(event.target.value) * 2.5));

        const r: number = Number(getComputedStyle(document.documentElement).getPropertyValue('--data-hue'));
        const g: number = Number(getComputedStyle(document.documentElement).getPropertyValue('--data-saturation'));
        const b: number = Number(getComputedStyle(document.documentElement).getPropertyValue('--data-lightness'));

        rgbToHueRotate(r, g, b);
    };

    return changeSettingValue;
};

export const handleSettingSize = (event: React.ChangeEvent<HTMLInputElement>): void => {
    document.documentElement.style.setProperty(`--size`, `${16 + (Number(event.target.value) / 100) * (56 - 16)}px`);
};

export const handleInitSettingValue = (nameInput: 'hue' | 'saturation' | 'lightness' | 'size'): number => {
    const value: string | null = localStorage.getItem(`yan-litvinenko-cv-${nameInput}`);

    if (nameInput === 'size') {
        if (value) return ((Number(value.replace(/px/g, '')) - 16) / (56 - 16)) * 100;

        return (
            ((Number(
                (getComputedStyle(document.documentElement).getPropertyValue(`--data-${nameInput}`) || '16').replace(
                    /px/g,
                    '',
                ),
            ) -
                16) /
                (56 - 16)) *
            100
        );
    }

    if (value) return Number(value) / 2.5;

    return Number(getComputedStyle(document.documentElement).getPropertyValue(`--data-${nameInput}`)) / 2.5;
};

export default handleInitSettingValue;
