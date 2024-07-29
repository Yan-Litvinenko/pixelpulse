interface WrapperClassName {
    availability: boolean;
    challenge: boolean;
    creations: boolean;
    credits: boolean;
    isLarge: boolean;
    isMedium: boolean;
    setting: boolean;
    social: boolean;
    styles: Record<string, string>;
}

const wrapperClassName = (props: WrapperClassName): string => {
    const { availability, creations, credits, challenge, setting, social } = props;
    const { isLarge, isMedium, styles } = props;

    const classes: string[] = [styles.wrapper];
    const modalWithCenterlEffect: boolean[] = [creations, setting];
    const modalWithLeftEffect: boolean[] = [availability, social, credits, challenge];

    if (!isMedium && !isLarge) {
        const hasModalLeftEffect: boolean = modalWithLeftEffect.some((state) => state);
        const hasModalCenterEffect: boolean = modalWithCenterlEffect.some((state) => state);

        classes.push(hasModalCenterEffect ? styles.wrapper__active_center : '');
        classes.push(hasModalLeftEffect ? styles.wrapper__active_left : '');
    }

    return classes.join(' ');
};

export { wrapperClassName };
