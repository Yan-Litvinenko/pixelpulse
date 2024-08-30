import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch } from '../../utils/customFetch';
import type { IAddCoinResult } from '../../interfaces/interface';

type HeaderStatistic = {
    statistic: {
        level: number | null;
        coins: number | null;
        addStatus: boolean;
    };
    loading: boolean;
    error: string | null;
};

const initialState: HeaderStatistic = {
    statistic: {
        level: null,
        coins: null,
        addStatus: false,
    },
    loading: false,
    error: null,
};

const fetchHeaderStatistic = createAsyncThunk('headerStatistic/fetchHeaderStatistic', async () => {
    const resolveLevel: number = await customFetch<number>('/api/getLevel');
    const resolveCoins: number = await customFetch<number>('/api/getCoins');
    const resolveAddStatus: boolean = await customFetch<boolean>('/api/getStatusAddToday');

    return {
        level: resolveLevel,
        coins: resolveCoins,
        addStatus: resolveAddStatus,
    };
});

const fetchAddCoin = createAsyncThunk<
    IAddCoinResult,
    React.MouseEvent<HTMLButtonElement, MouseEvent>,
    { rejectValue: string }
>('headerStatistic/fetchAddCoin', async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const response: Response = await fetch('/addCoin', { method: 'POST' });
    const updateStatistic: IAddCoinResult = await response.json();

    return new Promise((resolve) => setTimeout(() => resolve(updateStatistic), 500));
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
                state.statistic.addStatus = action.payload.addStatus;
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
                    state.statistic.addStatus = action.payload.addStatus;
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
