interface GetWrapperClass {
    effects: boolean[];
    settingState: boolean;
    isMedium: boolean;
    isLarge: boolean;
    stylesWrapper: Record<string, string>;
}

const getWrapperClass = ({
    effects,
    settingState,
    isMedium,
    isLarge,
    stylesWrapper: styles,
}: GetWrapperClass): string => {
    const classes: string[] = [styles.wrapper];

    if (!isMedium && !isLarge) {
        if (effects.some((state) => state)) {
            classes.push(styles.wrapper__active_left);
        }
        if (settingState) {
            classes.push(styles.wrapper__active_center);
        }
    }

    return classes.join(' ');
};

export default getWrapperClass;
