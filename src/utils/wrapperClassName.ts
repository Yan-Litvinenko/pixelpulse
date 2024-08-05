import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const wrapperClassName = (styles: Record<string, string>): string => {
    const { isSmall, isMedium } = useSelector((state: RootState) => state.mediaQuery);
    const { availability, creations, credits, challenge, settings, social } = useSelector(
        (state: RootState) => state.modal.stateModal,
    );

    const classes: string[] = [styles.wrapper];
    const modalWithCenterlEffect: boolean[] = [creations, settings];
    const modalWithLeftEffect: boolean[] = [availability, social, credits, challenge];

    if (!isMedium && !isSmall) {
        const hasModalLeftEffect: boolean = modalWithLeftEffect.some((state) => state);
        const hasModalCenterEffect: boolean = modalWithCenterlEffect.some((state) => state);

        classes.push(hasModalCenterEffect ? styles.wrapper__active_center : '');
        classes.push(hasModalLeftEffect ? styles.wrapper__active_left : '');
    }

    return classes.join(' ');
};

export { wrapperClassName };
