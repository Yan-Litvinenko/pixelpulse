export const handleInitSettings = (): void => {
    const hue: string = localStorage.getItem('yan-litvinenko-cv-hue') || '0';
    const imageColor: string = localStorage.getItem('yan-litvinenko-cv-image-color') || '0deg';
    const size: string = localStorage.getItem('yan-litvinenko-cv-size') || '16px';

    document.documentElement.style.setProperty('--data-hue', hue);
    document.documentElement.style.setProperty('--data-image-color', imageColor);
    document.documentElement.style.setProperty('--size', size);
};

export const handleDefaultSettings = (): void => {
    const hue: string = '0';
    const imageColor: string = '0deg';
    const size: string = '16px';

    localStorage.setItem('yan-litvinenko-cv-hue', hue);
    localStorage.setItem('yan-litvinenko-cv-image-color', imageColor);
    localStorage.setItem('yan-litvinenko-cv-size', size);

    document.documentElement.style.setProperty('--data-hue', hue);
    document.documentElement.style.setProperty('--data-image-color', imageColor);
    document.documentElement.style.setProperty('--size', size);
};

export const handleSaveSetting = (): void => {
    const hue: string = getComputedStyle(document.documentElement).getPropertyValue('--data-hue');
    const imageColor: string = getComputedStyle(document.documentElement).getPropertyValue('--data-image-color');
    const size: string = getComputedStyle(document.documentElement).getPropertyValue('--size');

    localStorage.setItem('yan-litvinenko-cv-hue', hue);
    localStorage.setItem('yan-litvinenko-cv-image-color', imageColor);
    localStorage.setItem('yan-litvinenko-cv-size', size);
};

export const handleSettingColor = (event: React.ChangeEvent<HTMLInputElement>): void => {
    document.documentElement.style.setProperty(`--data-image-color`, `${Number(event.target.value) * 2.5}deg`);
    document.documentElement.style.setProperty(`--data-hue`, String(Number(event.target.value) * 2.5));
};

export const handleSettingSize = (event: React.ChangeEvent<HTMLInputElement>): void => {
    document.documentElement.style.setProperty(`--size`, `${16 + (Number(event.target.value) / 100) * (56 - 16)}px`);
};

export const handleInitSettingValue = (nameInput: 'hue' | 'size'): number => {
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
