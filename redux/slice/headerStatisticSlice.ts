import fetchGraphQl from '@/helpers/fetchGraphql';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_STATISTIC, UPDATE_STATISTIC } from '@/app/api/graphql/query';
import type { HeaderStatistic, Statistic } from '@/interface/header/header.interface';

type HeaderStatisticSlice = {
    statistic: Statistic;
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

const fetchHeaderStatistic = createAsyncThunk<Statistic>('headerStatistic/fetchHeaderStatistic', async () => {
    const resolveStatistic = await fetchGraphQl<{ getStatistic: Statistic }>(GET_STATISTIC);
    const { level, coins } = resolveStatistic.getStatistic as Statistic;
    return { level, coins };
});

const fetchAddCoin = createAsyncThunk<
    Statistic,
    React.MouseEvent<HTMLButtonElement, MouseEvent>,
    { rejectValue: string }
>('headerStatistic/fetchAddCoin', async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const updateStatistic = await fetchGraphQl<{ addCoinsAndUpdateLevel: Statistic }>(UPDATE_STATISTIC);
    const { level, coins } = updateStatistic.addCoinsAndUpdateLevel;
    return { level, coins };
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
