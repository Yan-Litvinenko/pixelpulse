import fetchGraphQl from '@/helpers/fetchGraphql';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_ALL_ACHIEVEMENTS } from '@/app/api/graphql/query';
import type { Achieve } from '@/interface/achievements/achievements.interface';

type AchievementsSlice = {
    amountAchievements: null | number;
    amountAchieved: null | number;
    percent: null | number;
    achievements: Achieve[] | null;
    loading: boolean;
    error: null | string;
};

const initialState: AchievementsSlice = {
    amountAchieved: null,
    amountAchievements: null,
    percent: null,
    achievements: null,
    loading: false,
    error: null,
};

const fetchAchievements = createAsyncThunk('achievements/fetchAchievements', async (): Promise<Achieve[]> => {
    const resolveAchievements = await fetchGraphQl<{ getAllAchievements: Achieve[] }>(GET_ALL_ACHIEVEMENTS);
    return resolveAchievements.getAllAchievements;
});

const achievedCount = (allAchievements: Achieve[]): number =>
    allAchievements.reduce((acc, { status }) => acc + (status === 'achieved' ? 1 : 0), 0);

const achievementsSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAchievements.fulfilled, (state, action) => {
                const achievements: Achieve[] = action.payload;
                const amountAchieved = achievedCount(action.payload);
                const amountAchievements = action.payload.length;
                const percent = (amountAchieved * 100) / amountAchievements;

                state.achievements = achievements;
                state.amountAchieved = amountAchieved;
                state.amountAchievements = amountAchievements;
                state.error = null;
                state.loading = false;
                state.percent = percent;
            })
            .addCase(fetchAchievements.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchAchievements.rejected, (state, action) => {
                state.error = action.error.message || 'Error achievements loading';
                state.loading = false;
            });
    },
});

export { fetchAchievements };
export type { AchievementsSlice };
export default achievementsSlice.reducer;
