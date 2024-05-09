interface GetWrapperClass {
    effectsLeft: boolean[];
    effectsCenter: boolean[];
    isMedium: boolean;
    isLarge: boolean;
    stylesWrapper: Record<string, string>;
}

const getWrapperClass = ({
    effectsLeft,
    effectsCenter,
    isMedium,
    isLarge,
    stylesWrapper: styles,
}: GetWrapperClass): string => {
    const classes: string[] = [styles.wrapper];

    if (!isMedium && !isLarge) {
        if (effectsLeft.some((state) => state)) {
            classes.push(styles.wrapper__active_left);
        }
        if (effectsCenter.some((state) => state)) {
            classes.push(styles.wrapper__active_center);
        }
    }

    return classes.join(' ');
};

export default getWrapperClass;
