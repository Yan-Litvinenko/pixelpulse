import achievementsSlice from './slice/achievementsSlice';
import creationsSlice from './slice/creationsSlice';
import headerStatisticSlice from './slice/headerStatisticSlice';
import mediaQuerySlice from './slice/mediaQuerySlice';
import modalSlice from './slice/modalSlice';
import musicSlice from './slice/musicSlice';
import rootStyleSlice from './slice/rootStyleSlice';
import soundsSlice from './slice/soundsSlice';
import { configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        achievements: achievementsSlice,
        creations: creationsSlice,
        headerStatistic: headerStatisticSlice,
        mediaQuery: mediaQuerySlice,
        modal: modalSlice,
        music: musicSlice,
        rootStyles: rootStyleSlice,
        sounds: soundsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
