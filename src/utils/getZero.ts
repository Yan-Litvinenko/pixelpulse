const getZero = (minutes: number): string => {
    if (minutes < 10) return `0${minutes}`;
    return `${minutes}`;
};

export default getZero;
