import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const mediaQuerySelector = useSelector((state: RootState) => state.mediaQuery);
export const stateModalSelector = useSelector((state: RootState) => state.modal.stateModal);
export const rootStylesSelector = useSelector((state: RootState) => state.rootStyles);
export const achievementsSelector = useSelector((state: RootState) => state.achievements);
export const creationsSelector = useSelector((state: RootState) => state.creations);
export const headerStatisticSelector = useSelector((state: RootState) => state.headerStatistic);
export const musicSelector = useSelector((state: RootState) => state.music);
export const soundsSelector = useSelector((state: RootState) => state.sounds);
