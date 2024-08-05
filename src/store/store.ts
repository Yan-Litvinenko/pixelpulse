import { configureStore } from '@reduxjs/toolkit';
import { creationsSlice } from './creationsSlice';
import { mediaSlice } from './mediaSlice';
import { modalSlice } from './modalSlice';
import type { ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        mediaQuery: mediaSlice.reducer,
        modal: modalSlice.reducer,
        creations: creationsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export { store };
