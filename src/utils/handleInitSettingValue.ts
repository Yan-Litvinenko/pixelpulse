const handleInitSettingValue = (nameInput: 'hue' | 'saturation' | 'lightness' | 'size'): number => {
    const value: string | null = localStorage.getItem(`yan-litvinenko-cv-${nameInput}`);

    if (nameInput === 'size') {
        if (value) return ((Number(value.replace(/px/g, '')) - 16) / (32 - 16)) * 100;

        return (
            ((Number(
                (getComputedStyle(document.documentElement).getPropertyValue(`--data-${nameInput}`) || '16').replace(
                    /px/g,
                    '',
                ),
            ) -
                16) /
                (32 - 16)) *
            100
        );
    }

    if (value) return Number(value) / 2.5;

    return Number(getComputedStyle(document.documentElement).getPropertyValue(`--data-${nameInput}`)) / 2.5;
};

export default handleInitSettingValue;
