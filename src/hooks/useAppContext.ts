import React from 'react';
import { ContextApp } from '../components/app/App';
import type { IContextApp } from '../interfaces/interface';

const useAppContext = (): IContextApp => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) throw new Error('App context is undefined');

    return contextApp;
};

export { useAppContext };
