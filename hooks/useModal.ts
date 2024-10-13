import { modalCloseHandler, modalOpenHandler } from '@/redux/slice/modalSlice';
import { soundsModalTrigger } from '@/redux/slice/soundsSlice';
import { stateModalSelector } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/redux/store';
import type { Modal } from '@/interface/interface';
import type { UseModal } from '@/interface/hooks.interface';

export default function useModal(key: Modal): UseModal {
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
}
