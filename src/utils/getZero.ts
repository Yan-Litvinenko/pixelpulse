const getZero = (minutes: number): string => {
    if (Number.isNaN(minutes) || typeof minutes !== 'number') {
        throw new Error('Invalid input: minutes must be a number.');
    }
    if (minutes < 0 || minutes > 59) {
        throw new Error('The number must be no less than 0 and no more than 59');
    }

    if (minutes < 10) {
        return `0${minutes}`;
    }

    return `${minutes}`;
};

export { getZero };
