import {
    mediaQuerySelector,
    stateModalSelector,
    rootStylesSelector,
} from '../store/selectors';
import { useSelector } from 'react-redux';

const wrapperClassName = (): string => {
    const { isSmall, isMedium } = useSelector(mediaQuerySelector);
    const { availability, creations, credits, challenge, settings, social } =
        useSelector(stateModalSelector);
    const { wrapper, wrapperCenterRotate, wrapperLeftRotate } =
        useSelector(rootStylesSelector);

    const classes: string[] = [wrapper];
    const modalWithCenterRotate: boolean[] = [creations, settings];
    const modalWithLeftRotate: boolean[] = [
        availability,
        social,
        credits,
        challenge,
    ];

    if (!isMedium && !isSmall) {
        const hasModalLeftEffect: boolean = modalWithLeftRotate.some(
            (state) => state,
        );
        const hasModalCenterEffect: boolean = modalWithCenterRotate.some(
            (state) => state,
        );

        classes.push(hasModalCenterEffect ? wrapperCenterRotate : '');
        classes.push(hasModalLeftEffect ? wrapperLeftRotate : '');
    }

    return classes.join(' ');
};

export { wrapperClassName };
