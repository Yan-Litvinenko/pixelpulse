import React from 'react';
import { mediaQuerySelector } from '../store/selectors';
import { setMediaState } from '../store/slices/mediaQuerySlice';
import { useDispatch, useSelector } from 'react-redux';

const useMedia = (): void => {
    const { SMALL, MEDIUM } = useSelector(mediaQuerySelector);
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
