import React from 'react';
import { modalCloseHandler } from '@/redux/slice/modalSlice';
import { stateModalSelector } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { soundsModalTrigger } from '@/redux/slice/soundsSlice';
import type { AppDispatch } from '@/redux/store';
import type { Modal } from '@/interface/interface';

export default function useModalCloseByKey(): void {
    const dispatch = useDispatch<AppDispatch>();
    const { stateModal, delay } = useSelector(stateModalSelector);

    React.useEffect(() => {
        const closeModalByKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                const firstTrueKey: Modal = Object.entries(stateModal).find(([, value]) => value)![0] as Modal;
                const isDelayEnd = Object.values(delay).some((modalDelay) => {
                    return modalDelay === true;
                });

                if (isDelayEnd) {
                    dispatch(soundsModalTrigger());
                }

                dispatch(modalCloseHandler({ key: firstTrueKey as Modal }));
            }
        };

        const isAnyModalOpen: boolean = Object.values(stateModal).some((value) => value === true);

        if (isAnyModalOpen) window.addEventListener('keydown', closeModalByKey);

        return () => window.removeEventListener('keydown', closeModalByKey);
    }, [stateModal, delay, dispatch]);
}
