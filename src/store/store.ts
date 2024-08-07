import { achievementsSlice } from './achievementsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { creationsSlice } from './creationsSlice';
import { headerStatisticSlice } from './headerStatisticSlice';
import { mediaSlice } from './mediaSlice';
import { modalSlice } from './modalSlice';
import { musicSlice } from './musicSlice';
import { rootStyleSlice } from './rootStyleSlice';
import { soundsSlice } from './soundsSlice';
import type { ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        achievements: achievementsSlice.reducer,
        creations: creationsSlice.reducer,
        headerStatistic: headerStatisticSlice.reducer,
        mediaQuery: mediaSlice.reducer,
        modal: modalSlice.reducer,
        music: musicSlice.reducer,
        rootStyles: rootStyleSlice.reducer,
        sounds: soundsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export { store };
