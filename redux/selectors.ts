import type { RootState } from './store';

export const achievementsSelector = (state: RootState) => state.achievements;
export const creationsSelector = (state: RootState) => state.creations;
export const headerStatisticSelector = (state: RootState) => state.headerStatistic;
export const mediaQuerySelector = (state: RootState) => state.mediaQuery;
export const musicSelector = (state: RootState) => state.music;
export const rootStylesSelector = (state: RootState) => state.rootStyles;
export const soundsSelector = (state: RootState) => state.sounds;
export const stateModalSelector = (state: RootState) => state.modal;
