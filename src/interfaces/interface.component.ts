interface ICross {
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    scrollStatus: 'on' | 'off';
}

interface IFrame {
    className?: string;
}

interface IClipPathBorder {
    className: string;
}

interface IStatistics {
    className: Record<string, string>;
}

interface IJouystick {
    className: string;
    down: () => void;
    left: () => void;
    right: () => void;
    up: () => void;
}

interface IButton {
    className: string;
    delayEvent: boolean;
    handleButton: () => void;
    image?: () => React.ReactNode;
    isValid?: boolean;
    textContent: string;
    type: 'submit' | 'button';
}

interface ILogsElement {
    className: string;
    date: string | undefined;
    textContent: string;
}

interface IModalBoxButton {
    handleEnter: () => void;
    handleEscape: () => void;
    isValid?: boolean;
    textEnter: string;
    textEsc: string;
    typeEnter: 'submit' | 'button';
}

interface ICreditItem {
    title: string;
    text: string | string[];
}

interface IModalSendState {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
    status: boolean;
}

export {
    ICross,
    IFrame,
    IClipPathBorder,
    IButton,
    IStatistics,
    IJouystick,
    ILogsElement,
    IModalBoxButton,
    ICreditItem,
    IModalSendState,
};
