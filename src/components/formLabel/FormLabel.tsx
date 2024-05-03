import React from 'react';
import { nanoid } from 'nanoid';
import { IContactFormData } from '../../interfaces/interface.form';
import { Field } from '../../interfaces/interface.form';
import styles from './FormLabel.module.scss';

interface ILabel {
    child: 'input' | 'textarea';
    error: string;
    fieldStatus?: boolean;
    name: Field;
    onChange: (key: keyof IContactFormData, value: string) => void;
    placeholder: string;
    textContent: string;
    value: string;
}

function FormLabel(props: ILabel): React.JSX.Element {
    const id: string = nanoid();

    const getClassNameError = (child: 'input' | 'textarea'): string => {
        if (child === 'input') {
            return styles.error_input;
        }
        return styles.error_textarea;
    };

    const getFieldClassName = (initClass: string): string => {
        const classes: string[] = [initClass];

        if (!props.fieldStatus) {
            classes.push(styles.label__field_error);
        }

        return classes.join(' ');
    };

    return (
        <label className={styles.label} htmlFor={id}>
            {props.textContent}
            <span className={getClassNameError(props.child)}>{props.error}</span>
            {props.child === 'input' ? (
                <input
                    className={getFieldClassName(styles.label__input)}
                    id={id}
                    onChange={() => props.onChange}
                    placeholder={props.placeholder}
                    type="text"
                    value={props.value}
                />
            ) : (
                <textarea
                    className={getFieldClassName(styles.label__textarea)}
                    id={id}
                    onChange={() => props.onChange}
                    placeholder={props.placeholder}
                ></textarea>
            )}
        </label>
    );
}

export default FormLabel;
