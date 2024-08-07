import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalCloseHandler } from '../store/modalSlice';
import type { AppDispatch, RootState } from '../store/store';
import type { Modal } from '../store/modalSlice';

const useModalCloseByKey = (): void => {
    const dispatch = useDispatch<AppDispatch>();
    const modals = useSelector((state: RootState) => state.modal.stateModal);

    React.useEffect(() => {
        const closeModalByKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                const firstTrueKey: Modal = Object.entries(modals).find(([, value]) => value)![0] as Modal;
                dispatch(modalCloseHandler({ key: firstTrueKey as Modal }));
            }
        };

        const isAnyModalOpen: boolean = Object.values(modals).some((value) => value === true);

        if (isAnyModalOpen) window.addEventListener('keydown', closeModalByKey);

        return () => window.removeEventListener('keydown', closeModalByKey);
    }, [modals, dispatch]);
};

export { useModalCloseByKey };
