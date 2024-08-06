import { achievementsSlice } from './achievementsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { creationsSlice } from './creationsSlice';
import { headerStatisticSlice } from './headerStatisticSlice';
import { mediaSlice } from './mediaSlice';
import { modalSlice } from './modalSlice';
import { rootStyleSlice } from './rootStyleSlice';
import type { ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        creations: creationsSlice.reducer,
        mediaQuery: mediaSlice.reducer,
        modal: modalSlice.reducer,
        rootStyles: rootStyleSlice.reducer,
        headerStatistic: headerStatisticSlice.reducer,
        achievements: achievementsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export { store };
