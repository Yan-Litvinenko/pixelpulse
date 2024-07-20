import React from 'react';
import { useLocation } from 'react-router-dom';

const useTitle = (): void => {
    const location = useLocation();
    const transformTitle = (title: string): string => title[0]?.toLocaleUpperCase() + title.slice(1);

    React.useEffect(() => {
        const path: string[] = location.pathname.split('/');
        const title: string = path[path.length - 1];

        if (title.length) document.title = transformTitle(title);
        if (!title.length) document.title = 'Welcome';
    }, [location.pathname]);
};

export { useTitle };
