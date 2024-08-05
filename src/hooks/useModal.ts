import { modalCloseHandler, modalOpenHandler } from '../store/modalSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import type { Modal } from '../store/modalSlice';

type UseModal = {
    close: () => void;
    open: () => void;
};

const useModal = (key: Modal): UseModal => {
    const dispatch = useDispatch<AppDispatch>();
    const modalCloseByClick = () => dispatch(modalCloseHandler({ key }));
    const modalOpenByClick = () => dispatch(modalOpenHandler({ key }));

    return {
        close: modalCloseByClick,
        open: modalOpenByClick,
    };
};

export { useModal };
