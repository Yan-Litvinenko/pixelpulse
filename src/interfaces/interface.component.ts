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

interface IButton {
    className: string;
    delayEvent: boolean;
    handleButton: () => void;
    image?: () => React.ReactNode;
    isValid?: boolean;
    textContent: string;
    type: 'submit' | 'button';
}

export { ICross, IFrame, IClipPathBorder, IButton };
