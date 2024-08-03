import { Store } from '../store/store';
import { useSelector } from 'react-redux';

interface WrapperClassName {
    availability: boolean;
    challenge: boolean;
    creations: boolean;
    credits: boolean;
    setting: boolean;
    social: boolean;
    styles: Record<string, string>;
}

const wrapperClassName = (props: WrapperClassName): string => {
    const { isSmall, isMedium } = useSelector((state: Store) => state.mediaQuery);
    const { availability, creations, credits, challenge, setting, social } = props;
    const { styles } = props;

    const classes: string[] = [styles.wrapper];
    const modalWithCenterlEffect: boolean[] = [creations, setting];
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
