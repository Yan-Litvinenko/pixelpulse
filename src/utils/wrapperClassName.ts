import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const wrapperClassName = (): string => {
    const { isSmall, isMedium } = useSelector((state: RootState) => state.mediaQuery);
    const { availability, creations, credits, challenge, settings, social } = useSelector(
        (state: RootState) => state.modal.stateModal,
    );
    const { wrapper, wrapperCenterRotate, wrapperLeftRotate } = useSelector((state: RootState) => state.rootStyles);

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
