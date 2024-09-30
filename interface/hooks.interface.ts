export type UseModal = {
    close: () => void;
    open: () => void;
};

export type UseTelegramApi = {
    successfully: boolean;
    loading: boolean;
    error: boolean;
    setSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    send: (data: Record<string, string>, windowName: string) => Promise<void>;
};
