import React from 'react';
import { nanoid } from 'nanoid';
import { ILabel } from '../../interfaces/interface.form';
import styles from './FormLabel.module.scss';

const FormLabel = (props: ILabel): React.JSX.Element => {
    const { errors, name, child, textContent, autofocus, placeholder } = props;
    const { maxLength, minLength, register, pattern, patternMessage } = props;

    const id: string = nanoid();
    const errorMessage = errors[name]?.message as string;

    return (
        <label className={styles.label} htmlFor={id}>
            {textContent}
            {errorMessage && (
                <span className={child === 'input' ? styles.error_input : styles.error_textarea}>
                    &#10059; {errorMessage}
                </span>
            )}
            {child === 'input' ? (
                <input
                    autoComplete="off"
                    autoFocus={autofocus}
                    className={styles.label__input}
                    id={id}
                    placeholder={placeholder}
                    type="text"
                    {...register(name, {
                        required: 'This field is required',
                        minLength: {
                            value: minLength,
                            message: `the number of characters cannot be less ${minLength}`,
                        },
                        maxLength: {
                            value: maxLength,
                            message: `the number of characters cannot be more ${maxLength}`,
                        },
                        pattern: {
                            value: pattern,
                            message: patternMessage,
                        },
                    })}
                />
            ) : (
                <textarea
                    className={styles.label__textarea}
                    id={id}
                    placeholder={placeholder}
                    {...register(name, {
                        required: 'This field is required',
                        minLength: {
                            value: minLength,
                            message: `the number of characters cannot be less ${minLength}`,
                        },
                        maxLength: {
                            value: maxLength,
                            message: `the number of characters cannot be more ${maxLength}`,
                        },
                        pattern: {
                            value: pattern,
                            message: patternMessage,
                        },
                    })}
                ></textarea>
            )}
        </label>
    );
};

export default FormLabel;
