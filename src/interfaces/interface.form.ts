import type { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

type Field = 'name' | 'email' | 'message' | 'title' | 'description';
type Rarity = 'unusual' | 'rare' | 'epic' | 'legendary';

interface IForm {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
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

interface IFormChallenge extends IForm {
    selectValue: Rarity;
    setSelectValue: React.Dispatch<React.SetStateAction<Rarity>>;
}

export type { Field, IForm, Rarity, ILabel, IFormChallenge };
