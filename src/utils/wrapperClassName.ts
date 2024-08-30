import { mediaQuerySelector, stateModalSelector, rootStylesSelector } from '../store/selectors/selectors';

const wrapperClassName = (): string => {
    const { isSmall, isMedium } = mediaQuerySelector;
    const { availability, creations, credits, challenge, settings, social } = stateModalSelector;
    const { wrapper, wrapperCenterRotate, wrapperLeftRotate } = rootStylesSelector;

    const classes: string[] = [wrapper];
    const modalWithCenterRotate: boolean[] = [creations, settings];
    const modalWithLeftRotate: boolean[] = [availability, social, credits, challenge];

    if (!isMedium && !isSmall) {
        const hasModalLeftEffect: boolean = modalWithLeftRotate.some((state) => state);
        const hasModalCenterEffect: boolean = modalWithCenterRotate.some((state) => state);

        classes.push(hasModalCenterEffect ? wrapperCenterRotate : '');
        classes.push(hasModalLeftEffect ? wrapperLeftRotate : '');
    }

    return classes.join(' ');
};

export { wrapperClassName };
