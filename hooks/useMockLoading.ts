import React from 'react';

export default function useMockLoading() {
    const [isLoad, setIsLoad] = React.useState(true);
    const mockLoading = () => new Promise((resolve) => setTimeout(() => resolve(setIsLoad(false)), 150));

    React.useEffect(() => {
        mockLoading();
    }, []);

    return isLoad;
}
