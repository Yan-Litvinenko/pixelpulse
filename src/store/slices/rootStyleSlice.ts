import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type RootStyleSlice = {
    wrapper: string;
    wrapperLeftRotate: string;
    wrapperCenterRotate: string;
    navigation: string;
    navigationList: string;
};

const initialState: RootStyleSlice = {
    wrapper: '',
    wrapperCenterRotate: '',
    wrapperLeftRotate: '',
    navigation: '',
    navigationList: '',
};

const rootStyleSlice = createSlice({
    name: 'rootStyles',
    initialState,
    reducers: {
        installRootStyles(state, action: PayloadAction<Record<string, string>>) {
            state.navigation = action.payload.navigation;
            state.navigationList = action.payload.navigation__list;
            state.wrapper = action.payload.wrapper;
            state.wrapperCenterRotate = action.payload.wrapper__center_rotate;
            state.wrapperLeftRotate = action.payload.wrapper__left_rotate;
        },
    },
});

export const { installRootStyles } = rootStyleSlice.actions;
export type { RootStyleSlice };
export { rootStyleSlice };
