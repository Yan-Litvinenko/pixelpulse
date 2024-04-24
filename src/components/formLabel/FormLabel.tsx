import React from 'react';
import { nanoid } from 'nanoid';
import styles from './FormLabel.module.scss';

interface ILabel {
    child: 'input' | 'textarea';
    placeholder: string;
    textContent: string;
}

function FormLabel(props: ILabel): React.JSX.Element {
    const id: string = nanoid();

    return (
        <label className={styles.label} htmlFor={id}>
            {props.textContent}
            {props.child === 'input' ? (
                <input className={styles.label__input} id={id} type="text" placeholder={props.placeholder} />
            ) : (
                <textarea className={styles.label__textarea} id={id} placeholder={props.placeholder}></textarea>
            )}
        </label>
    );
}

export default FormLabel;
