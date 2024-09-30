'use client';

import React from 'react';
import useModal from '../../hooks/useModal';
import Link from 'next/link';
import styles from '@/styles/components/navigationMobileButtons/NavigationMobileButtons.module.scss';
import { scroll } from '@/helpers/Scroll';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { stateModalSelector } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function NavigationMobileButtons(): React.JSX.Element {
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
            <Link href={'/about'} className={styles.box__about} onClick={aboutClick}>
                about
            </Link>
        </div>
    );
}
