import React from 'react';

interface UseTelegramApi {
    successfully: boolean;
    loading: boolean;
    error: boolean;
    setSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    send: (data: Record<string, string>, windowName: string) => Promise<void>;
}

const TOKEN: string | undefined = process.env.REACT_APP_TELEGRAM_TOKEN;
const CHAT_ID: string | undefined = process.env.REACT_APP_TELEGRAM_CHAT;

const useTelegramApi = (): UseTelegramApi => {
    const [successfully, setSuccessfully] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);

    const format = (data: Record<string, string>, windowName: string): string => {
        const formattedMessage: string[] = [`${windowName}`];

        for (const [key, value] of Object.entries(data)) {
            formattedMessage.push(`${key}: ${value}`);
        }

        return formattedMessage.join('\n');
    };

    const send = async (data: Record<string, string>, windowName: string): Promise<void> => {
        setLoading(true);

        const message: string = format(data, windowName);

        try {
            const response: Response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                }),
            });

            const result: string = await response.json();

            if (result) {
                setLoading(false);
                setSuccessfully(true);
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
};

export { useTelegramApi };
export type { UseTelegramApi };
