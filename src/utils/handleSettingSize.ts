const handleSettingSize = (event: React.ChangeEvent<HTMLInputElement>): void => {
    document.documentElement.style.setProperty(`--size`, `${16 + (Number(event.target.value) / 100) * (32 - 16)}px`);
};

export default handleSettingSize;
