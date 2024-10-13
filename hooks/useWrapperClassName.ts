import { mediaQuerySelector, stateModalSelector, rootStylesSelector } from '@/redux/selectors';
import { useSelector } from 'react-redux';

export default function useWrapperClassName(): string {
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

        if (hasModalCenterEffect) {
            classes.push(wrapperCenterRotate);
        }
        if (hasModalLeftEffect) {
            classes.push(wrapperLeftRotate);
        }
    }

    return classes.join(' ');
}
