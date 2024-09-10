import { createSlice } from '@reduxjs/toolkit';
import { scroll } from '../../classes/Scroll';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from '../store';

type Modal = 'social' | 'availability' | 'creations' | 'credits' | 'settings' | 'challenge' | 'navigationMobile';
type SetValueAndKeyReduce = {
    key: Modal;
    value: boolean;
};
type SetKeyReduce = Pick<SetValueAndKeyReduce, 'key'>;
type ModalSlice = {
    readonly TRANSITION_TIME: number;
    stateModal: Record<Modal, boolean>;
    stateForm: Record<Modal, boolean>;
    delay: Record<Modal, boolean>;
};

const initialState: ModalSlice = {
    TRANSITION_TIME: 1500,
    stateModal: {
        availability: false,
        social: false,
        creations: false,
        credits: false,
        settings: false,
        challenge: false,
        navigationMobile: false,
    },
    stateForm: {
        availability: false,
        social: false,
        creations: false,
        credits: false,
        settings: false,
        challenge: false,
        navigationMobile: false,
    },
    delay: {
        availability: false,
        social: false,
        creations: false,
        credits: false,
        settings: false,
        challenge: false,
        navigationMobile: false,
    },
};

const modalSlice = createSlice({
    name: 'availability',
    initialState,
    reducers: {
        setDelay(state, action: PayloadAction<SetValueAndKeyReduce>) {
            state.delay[action.payload.key] = action.payload.value;
        },
        setModalStateForm(state, action: PayloadAction<SetValueAndKeyReduce>) {
            state.stateForm[action.payload.key] = action.payload.value;
        },
        open(state, action: PayloadAction<SetKeyReduce>) {
            state.stateModal[action.payload.key] = true;
        },
        close(state, action: PayloadAction<SetKeyReduce>) {
            state.stateModal[action.payload.key] = false;
            state.stateForm[action.payload.key] = false;
            state.delay[action.payload.key] = false;
        },
    },
});

const { setDelay, setModalStateForm, open, close } = modalSlice.actions;

const modalOpenHandler =
    (props: SetKeyReduce): AppThunk =>
    (dispatch, getState) => {
        const { TRANSITION_TIME } = getState().modal;
        const { isMedium } = getState().mediaQuery;
        const { key } = props;

        const openHelper = (): void => {
            window.removeEventListener('scrollend', openHelper);

            if (isMedium) {
                dispatch(setDelay({ key, value: true }));
            } else {
                setTimeout(() => dispatch(setDelay({ key, value: true })), TRANSITION_TIME);
            }

            scroll.off();
            dispatch(open({ key }));
        };

        if (window.scrollY !== 0) {
            window.addEventListener('scrollend', openHelper);
            scroll.moveTop();
            return;
        }

        openHelper();
    };

const modalCloseHandler =
    (props: SetKeyReduce): AppThunk =>
    (dispatch, getState) => {
        const { key } = props;
        const { delay, stateForm } = getState().modal;

        if (!delay[key] || stateForm[key]) return;

        dispatch(close({ key }));
        scroll.on();
    };

export { modalSlice, modalOpenHandler, setModalStateForm, modalCloseHandler };
export type { Modal };
