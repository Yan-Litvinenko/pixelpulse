import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { BooleanState } from '../interfaces/interface';

type Field = 'name' | 'email' | 'message' | 'title' | 'description';
type Rarity = 'unusual' | 'rare' | 'epic' | 'legendary';

interface IForm {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

interface FormSubmit {
    error: boolean;
    errors: FieldErrors<FieldValues>;
    isValid: boolean;
    loading: boolean;
    register: UseFormRegister<FieldValues>;
    successfully: boolean;
    setError: BooleanState;
    setLoading: BooleanState;
    setSuccessfully: BooleanState;
    handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

interface ILabel {
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
}

export { Field, IForm, Rarity, FormSubmit, ILabel };
