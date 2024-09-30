import type { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import type { Rarity } from '../achievements/achievements.interface';

type Field = 'name' | 'email' | 'message' | 'title' | 'description';

export type FormProps = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export type LabelProps = {
    autofocus?: boolean;
    child: 'input' | 'textarea';
    errors: FieldErrors<FieldValues>;
    maxLength: number;
    minLength: number;
    name: Field;
    pattern: RegExp;
    patternMessage: string;
    placeholder: string;
    register: UseFormRegister<FieldValues>;
    textContent: string;
};

export type UseFormSubmit = {
    errorForm: FieldErrors<FieldValues>;
    handleSubmitForm: (e?: React.BaseSyntheticEvent) => Promise<void>;
    isValidForm: boolean;
    registerForm: UseFormRegister<FieldValues>;
    errorTelegram: boolean;
    loadingTelegram: boolean;
    successfullyTelegram: boolean;
    setErrorTelegram: React.Dispatch<React.SetStateAction<boolean>>;
    setLoadingTelegram: React.Dispatch<React.SetStateAction<boolean>>;
    setSuccessfullyTelegram: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ModalBoxButtonProps = {
    handleEnter: () => void;
    handleEscape: () => void;
    isValid?: boolean;
    textEnter: string;
    textEsc: string;
    typeEnter: 'submit' | 'button';
};

export type ModalSendStateProps = {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
    status: boolean;
};

export type SelectChallengeProps = {
    register: UseFormRegister<FieldValues>;
    selectValue: Rarity;
    setSelectValue: React.Dispatch<React.SetStateAction<Rarity>>;
};

export type FormChallengeProps = FormProps & {
    selectValue: Rarity;
    setSelectValue: React.Dispatch<React.SetStateAction<Rarity>>;
};
