import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { HeaderStatistic } from '@/interface/header/header.interface';

type HeaderStatisticSlice = {
    statistic: {
        level: number;
        coins: number;
    };
    loading: boolean;
    error: string | null;
};

const initialState: HeaderStatisticSlice = {
    statistic: {
        level: 0,
        coins: 0,
    },
    loading: false,
    error: null,
};

const fetchHeaderStatistic = createAsyncThunk('headerStatistic/fetchHeaderStatistic', async () => {
    const [responseLevel, responseCoins] = await Promise.all([
        fetch('/api/level', { method: 'GET' }),
        fetch('/api/coins', { method: 'GET' }),
    ]);

    const resolveLevel: number = await responseLevel.json();
    const resolveCoins: number = await responseCoins.json();

    return {
        level: resolveLevel,
        coins: resolveCoins,
    };
});

const fetchAddCoin = createAsyncThunk<
    HeaderStatistic,
    React.MouseEvent<HTMLButtonElement, MouseEvent>,
    { rejectValue: string }
>('headerStatistic/fetchAddCoin', async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const response: Response = await fetch('/api/addCoins', {
        method: 'POST',
    });

    return response.json();
});

const headerStatisticSlice = createSlice({
    name: 'headerStatistic',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchHeaderStatistic.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;

                state.statistic.coins = action.payload.coins;
                state.statistic.level = action.payload.level;
            })
            .addCase(fetchHeaderStatistic.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHeaderStatistic.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error loading statistic';
            })

            .addCase(fetchAddCoin.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;

                if (action.payload) {
                    state.statistic.level = action.payload.level;
                    state.statistic.coins = action.payload.coins;
                }
            })
            .addCase(fetchAddCoin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAddCoin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error added coins';
            });
    },
});

export { headerStatisticSlice, fetchAddCoin, fetchHeaderStatistic };
export type { HeaderStatistic };
export default headerStatisticSlice.reducer;
