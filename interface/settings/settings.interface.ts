export type RangeProps = {
    changeSettingValue: (event: React.ChangeEvent<HTMLInputElement>, variableName: 'hue' | 'size') => void;
    inputTarget: 'color' | 'size';
    max: number;
    min: number;
    textContent: string;
    inputValue: number;
};
