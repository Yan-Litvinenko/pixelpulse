import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { Field } from '../../interfaces/interface.form';
import styles from './FormLabel.module.scss';

interface ILabel {
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

function FormLabel(props: ILabel): React.JSX.Element {
    const id: string = nanoid();
    const errorMessage = props.errors[props.name]?.message as string;

    const getClassNameError = (child: 'input' | 'textarea'): string => {
        if (child === 'input') {
            return styles.error_input;
        }
        return styles.error_textarea;
    };

    return (
        <label className={styles.label} htmlFor={id}>
            {props.textContent}
            {errorMessage && <span className={getClassNameError(props.child)}>&#10059; {errorMessage}</span>}
            {props.child === 'input' ? (
                <input
                    className={styles.label__input}
                    id={id}
                    placeholder={props.placeholder}
                    type="text"
                    autoComplete="off"
                    {...props.register(props.name, {
                        required: 'This field is required',
                        minLength: {
                            value: props.minLength,
                            message: `the number of characters cannot be less ${props.minLength}`,
                        },
                        maxLength: {
                            value: props.maxLength,
                            message: `the number of characters cannot be more ${props.maxLength}`,
                        },
                        pattern: {
                            value: props.pattern,
                            message: props.patternMessage,
                        },
                    })}
                />
            ) : (
                <textarea
                    className={styles.label__textarea}
                    id={id}
                    placeholder={props.placeholder}
                    {...props.register(props.name, {
                        required: 'This field is required',
                        minLength: {
                            value: props.minLength,
                            message: `the number of characters cannot be less ${props.minLength}`,
                        },
                        maxLength: {
                            value: props.maxLength,
                            message: `the number of characters cannot be more ${props.maxLength}`,
                        },
                        pattern: {
                            value: props.pattern,
                            message: props.patternMessage,
                        },
                    })}
                ></textarea>
            )}
        </label>
    );
}

export default FormLabel;
