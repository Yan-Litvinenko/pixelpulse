import React from 'react';
import { nanoid } from 'nanoid';
import { IContactFormData } from '../../interfaces/interface';
import styles from './FormLabel.module.scss';
import { ContextApp } from '../app/App';

type Name = 'name' | 'email' | 'message' | 'title' | 'description';

interface ILabel {
    child: 'input' | 'textarea';
    name: Name;
    onChange: (key: keyof IContactFormData, value: string) => void;
    placeholder: string;
    textContent: string;
    value: string;
    error: string;
}

function FormLabel(props: ILabel): React.JSX.Element {
    const contextApp = React.useContext(ContextApp);
    const id: string = nanoid();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        props.onChange(props.name as keyof IContactFormData, event.target.value);

        if (props.error !== '') {
            contextApp?.setFormError((prev) => {
                return { ...prev, [props.name]: props.error };
            });
        } else {
            contextApp?.setFormError((prev) => {
                delete prev[props.name];
                return { ...prev };
            });
        }
    };

    return (
        <label className={styles.label} htmlFor={id}>
            {props.textContent}
            <span className={props.child === 'input' ? styles.error_input : styles.error_textarea}>{props.error}</span>
            {props.child === 'input' ? (
                <input
                    className={styles.label__input}
                    id={id}
                    onChange={handleChange}
                    placeholder={props.placeholder}
                    type="text"
                    value={props.value}
                />
            ) : (
                <textarea
                    className={styles.label__textarea}
                    id={id}
                    onChange={handleChange}
                    placeholder={props.placeholder}
                ></textarea>
            )}
        </label>
    );
}

export default FormLabel;
