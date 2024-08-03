import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../store/store';
import { setMediaState } from '../store/mediaSlice';

const useMedia = (): void => {
    const { SMALL, MEDIUM } = useSelector((state: Store) => state.mediaQuery);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const handleResize = () => {
            const isSmall: boolean = window.innerWidth <= SMALL;
            const isMedium: boolean = window.innerWidth >= SMALL && window.innerWidth <= MEDIUM;

            dispatch(setMediaState({ isSmall, isMedium }));
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
};

export { useMedia };
