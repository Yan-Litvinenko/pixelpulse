import { modalCloseHandler, modalOpenHandler } from '../store/modalSlice';
import { soundsModalTrigger } from '../store/soundsSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import type { Modal } from '../store/modalSlice';

type UseModal = {
    close: () => void;
    open: () => void;
};

const useModal = (key: Modal): UseModal => {
    const { isMedium } = useSelector((state: RootState) => state.mediaQuery);
    const dispatch = useDispatch<AppDispatch>();

    const modalCloseByClick = () => {
        if (!isMedium) dispatch(soundsModalTrigger());
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
