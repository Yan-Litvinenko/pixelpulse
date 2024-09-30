import React from 'react';
import { mediaQuerySelector } from '@/redux//selectors';
import { setMediaState } from '@/redux/slice/mediaQuerySlice';
import { useDispatch, useSelector } from 'react-redux';

export default function useMedia(): void {
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
}
