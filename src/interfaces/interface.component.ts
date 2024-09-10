import type { Page } from './interface';
import type { UseFormRegister, FieldValues } from 'react-hook-form';
import type { Rarity } from './interface.achievements';

type PropsComponent = {
    className: string;
    textContent: string;
    title: string;
};

type IAboutElement = Omit<PropsComponent, 'className'>;
type IFrame = Partial<Pick<PropsComponent, 'className'>>;
type IClipPathBorder = Pick<PropsComponent, 'className'>;
type ILogsElement = Omit<PropsComponent, 'title'> & {
    date: string | undefined;
};
type ISettingElement = Omit<PropsComponent, 'title'> & {
    audioClassName?: string;
    image: string;
    onClick?: () => void;
};

type ICross = {
    handler: () => void;
};

type IStatistics = {
    styles: Record<string, string>;
};

type IJouystick = {
    className: string;
    down: () => void;
    left: () => void;
    right: () => void;
    up: () => void;
};

type IModalBoxButton = {
    handleEnter: () => void;
    handleEscape: () => void;
    isValid?: boolean;
    textEnter: string;
    textEsc: string;
    typeEnter: 'submit' | 'button';
};

type ICreditItem = {
    title: string;
    textContent: string | string[];
};

type IModalSendState = {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
    status: boolean;
};

type ILayout = {
    children: React.JSX.Element;
};

type INavigation = {
    styles: Record<string, string>;
};

type INavigationElement = {
    pageName: Page;
};

type IProfileElement = {
    adjacent: {
        image?: string;
        text: string;
        type: string;
    };
    header: {
        text: string;
    };
    classRoot: string;
    modal: null | 'availability' | 'social';
};

type IQuestElement = {
    className: {
        header: string;
        text: string;
    };
    hexagon: boolean;
    text: string;
    textTitle: string;
};

type IRange = {
    changeSettingValue: (
        event: React.ChangeEvent<HTMLInputElement>,
        variableName: 'hue' | 'size',
    ) => void;
    inputTarget: 'color' | 'size';
    max: number;
    min: number;
    textContent: string;
    inputValue: number;
};

type ISelectChallenge = {
    register: UseFormRegister<FieldValues>;
    selectValue: Rarity;
    setSelectValue: React.Dispatch<React.SetStateAction<Rarity>>;
};

type ISetting = {
    className: Record<string, string>;
};

type IErrorPage = {
    status: string;
    detail: string;
};

export type {
    IAboutElement,
    IClipPathBorder,
    ICreditItem,
    ICross,
    IErrorPage,
    IFrame,
    IJouystick,
    ILayout,
    ILogsElement,
    IModalBoxButton,
    IModalSendState,
    INavigation,
    INavigationElement,
    IProfileElement,
    IQuestElement,
    IRange,
    ISelectChallenge,
    ISetting,
    ISettingElement,
    IStatistics,
};
