import { soundsModalTrigger } from '../store/slices/soundsSlice';
import { stateModalSelector } from '../store/selectors';
import { useDispatch, useSelector } from 'react-redux';

const useModalClosingSound = (): void => {
    const dispatch = useDispatch();
    const { delay } = useSelector(stateModalSelector);
    const isDelayEnd = Object.values(delay).some((modalDelay) => {
        return modalDelay === true;
    });

    if (isDelayEnd) dispatch(soundsModalTrigger());
};

export { useModalClosingSound };
