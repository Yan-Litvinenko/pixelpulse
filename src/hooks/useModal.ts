import {
    modalCloseHandler,
    modalOpenHandler,
} from '../store/slices/modalSlice';
import { soundsModalTrigger } from '../store/slices/soundsSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import type { Modal } from '../store/slices/modalSlice';

type UseModal = {
    close: () => void;
    open: () => void;
};

const useModal = (key: Modal): UseModal => {
    const dispatch = useDispatch<AppDispatch>();

    const modalCloseByClick = () => {
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
