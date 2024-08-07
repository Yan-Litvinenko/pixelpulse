import React from 'react';
import { useDispatch } from 'react-redux';
import { installRootStyles } from '../store/rootStyleSlice';
import type { AppDispatch } from '../store/store';

const useApp = (styles: Record<string, string>) => {
    const dispatch = useDispatch<AppDispatch>();
    React.useEffect(() => {
        dispatch(installRootStyles(styles));
    }, []);
};

export { useApp };
