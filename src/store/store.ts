import { configureStore } from '@reduxjs/toolkit';
import { mediaSlice } from './mediaSlice';

const store = configureStore({
    reducer: {
        mediaQuery: mediaSlice.reducer,
    },
});

type Store = ReturnType<typeof store.getState>;
export { store, Store };
