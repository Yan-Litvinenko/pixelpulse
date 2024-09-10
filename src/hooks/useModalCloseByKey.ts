import React from 'react';
import { modalCloseHandler } from '../store/slices/modalSlice';
import { stateModalSelector } from '../store/selectors';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import type { Modal } from '../store/slices/modalSlice';

const useModalCloseByKey = (): void => {
    const dispatch = useDispatch<AppDispatch>();
    const modals = stateModalSelector;

    React.useEffect(() => {
        const closeModalByKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                const firstTrueKey: Modal = Object.entries(modals).find(
                    ([, value]) => value,
                )![0] as Modal;
                dispatch(modalCloseHandler({ key: firstTrueKey as Modal }));
            }
        };

        const isAnyModalOpen: boolean = Object.values(modals).some(
            (value) => value === true,
        );

        if (isAnyModalOpen) window.addEventListener('keydown', closeModalByKey);

        return () => window.removeEventListener('keydown', closeModalByKey);
    }, [modals, dispatch]);
};

export { useModalCloseByKey };
