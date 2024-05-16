const handleDefaultSettings = (): void => {
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

export default handleDefaultSettings;
