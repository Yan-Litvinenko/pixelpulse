import { mediaQuerySelector, stateModalSelector, rootStylesSelector } from '../store/selectors';
import { useSelector } from 'react-redux';

const wrapperClassName = (): string => {
    const modals = useSelector(stateModalSelector);
    const { isSmall, isMedium } = useSelector(mediaQuerySelector);
    const { wrapper, wrapperCenterRotate, wrapperLeftRotate } = useSelector(rootStylesSelector);
    const { availability, creations, credits, challenge, settings, social } = modals.stateModal;

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
