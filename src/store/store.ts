import { achievementsSlice } from './slices/achievementsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { creationsSlice } from './slices/creationsSlice';
import { headerStatisticSlice } from './slices/headerStatisticSlice';
import { mediaQuerySlice } from './slices/mediaQuerySlice';
import { modalSlice } from './slices/modalSlice';
import { musicSlice } from './slices/musicSlice';
import { rootStyleSlice } from './slices/rootStyleSlice';
import { soundsSlice } from './slices/soundsSlice';
import type { ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        achievements: achievementsSlice.reducer,
        creations: creationsSlice.reducer,
        headerStatistic: headerStatisticSlice.reducer,
        mediaQuery: mediaQuerySlice.reducer,
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
