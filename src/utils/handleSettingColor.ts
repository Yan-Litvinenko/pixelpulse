const handleSettingColor = (): ((
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
export default handleSettingColor;
