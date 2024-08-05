import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMediaState } from '../store/mediaSlice';
import type { RootState } from '../store/store';

const useMedia = (): void => {
    const { SMALL, MEDIUM } = useSelector((state: RootState) => state.mediaQuery);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const handleResize = () => {
            const isSmall: boolean = window.innerWidth <= SMALL;
            const isMedium: boolean = window.innerWidth <= MEDIUM;

            dispatch(setMediaState({ isSmall, isMedium }));
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
};

export { useMedia };
