import React from 'react';
import ModalBackground from '../modalBackground/ModalBackground';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import { nanoid } from 'nanoid';
import styles from './Form.module.scss';

const Form = (): React.JSX.Element => {
    return (
        <form className={styles.form}>
            <Label textContent={'How should I call you?'} placeholder={'your name'} child={'input'} />
            <Label textContent={'Sending from'} placeholder={'your.name@example.com'} child={'input'} />
            <Label textContent={'transmitted data'} placeholder={'Hi, I write to you about ...'} child={'textarea'} />
            <ClipPathBorder className={styles.border} />
            <ModalBackground />
        </form>
    );
};

interface ILabel {
    child: 'input' | 'textarea';
    placeholder: string;
    textContent: string;
}

function Label(props: ILabel): React.JSX.Element {
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

export default Form;
