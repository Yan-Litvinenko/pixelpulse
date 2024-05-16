const handleSaveSetting = (): void => {
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

export default handleSaveSetting;
