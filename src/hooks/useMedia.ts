import React from 'react';
import { mediaQuerySelector } from '../store/selectors/selectors';
import { setMediaState } from '../store/slices/mediaSlice';
import { useDispatch } from 'react-redux';

const useMedia = (): void => {
    const { SMALL, MEDIUM } = mediaQuerySelector;
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
