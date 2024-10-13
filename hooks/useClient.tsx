import React from 'react';

export default function useClient(): boolean {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}
