import React from 'react';
import type { UseTelegramApi } from '@/interface/hooks.interface';

export default function useTelegramApi(): UseTelegramApi {
    const [successfully, setSuccessfully] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);

    const send = async (data: Record<string, string>, windowName: string): Promise<void> => {
        setLoading(true);

        try {
            const response = await fetch('/api/telegramMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data, windowName }),
            });

            if (response.ok) {
                setLoading(false);
                setSuccessfully(true);
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        }
    };

    return {
        successfully,
        loading,
        error,
        setSuccessfully,
        setLoading,
        setError,
        send,
    };
}
