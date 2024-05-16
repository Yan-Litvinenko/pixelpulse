const handleInitSettings = (): void => {
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

export default handleInitSettings;
