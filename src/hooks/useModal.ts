import { modalCloseHandler, modalOpenHandler } from '../store/slices/modalSlice';
import { soundsModalTrigger } from '../store/slices/soundsSlice';
import { stateModalSelector } from '../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../store/store';
import type { Modal } from '../store/slices/modalSlice';

type UseModal = {
    close: () => void;
    open: () => void;
};

const useModal = (key: Modal): UseModal => {
    const dispatch = useDispatch<AppDispatch>();
    const { delay } = useSelector(stateModalSelector);

    const modalCloseByClick = () => {
        const isDelayEnd = Object.values(delay).some((modalDelay) => {
            return modalDelay === true;
        });

        if (isDelayEnd) dispatch(soundsModalTrigger());

        dispatch(modalCloseHandler({ key }));
    };
    const modalOpenByClick = () => {
        dispatch(soundsModalTrigger());
        dispatch(modalOpenHandler({ key }));
    };

    return {
        close: modalCloseByClick,
        open: modalOpenByClick,
    };
};

export { useModal };
