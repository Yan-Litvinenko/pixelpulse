import React from 'react';
import styles from './MobileBoxButton.module.scss';
import { Link } from 'react-router-dom';
import { scroll } from '../../classes/Scroll';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import { stateModalSelector } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';

const MobileBoxButton = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const { stateModal } = useSelector(stateModalSelector);
    const { close, open } = useModal('navigationMobile');

    const aboutClick = (): void => {
        const isAllModalClose = Object.entries(stateModal).every(([, modalState]) => modalState !== true);

        if (isAllModalClose) {
            dispatch(soundsClickTrigger());
        }

        close();
        scroll.on();
    };

    return (
        <div className={styles.box}>
            <button className={styles.box__navigation} onClick={open} type="button">
                navigation
            </button>
            <Link to={'about'} className={styles.box__about} onClick={aboutClick}>
                about
            </Link>
        </div>
    );
};

export { MobileBoxButton };
