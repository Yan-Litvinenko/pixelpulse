import React from 'react';
import { useDispatch } from 'react-redux';
import { installRootStyles } from '@/redux/slice/rootStyleSlice';
import type { AppDispatch } from '@/redux/store';

export default function useApp(styles: Record<string, string>) {
    const dispatch = useDispatch<AppDispatch>();
    React.useEffect(() => {
        dispatch(installRootStyles(styles));
    }, []);
}
