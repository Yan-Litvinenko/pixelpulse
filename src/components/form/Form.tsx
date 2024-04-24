import React from 'react';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import FormLabel from '../formLabel/FormLabel';
import ModalBackground from '../modalBackground/ModalBackground';
import styles from './Form.module.scss';

const Form = (): React.JSX.Element => {
    return (
        <form className={styles.form}>
            <FormLabel textContent={'How should I call you?'} placeholder={'your name'} child={'input'} />
            <FormLabel textContent={'Sending from'} placeholder={'your.name@example.com'} child={'input'} />
            <FormLabel
                textContent={'transmitted data'}
                placeholder={'Hi, I write to you about ...'}
                child={'textarea'}
            />
            <ClipPathBorder className={styles.border} />
            <ModalBackground />
        </form>
    );
};

export default Form;
