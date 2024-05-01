import React from 'react';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import ModalBackground from '../modalBackground/ModalBackground';
import FormLabel from '../formLabel/FormLabel';
import SelectChallenge from '../selectChallenge/SelectChallenge';
import styles from './FormChallenge.module.scss';

const FormChallenge = (): React.JSX.Element => {
    return (
        <>
            <form className={styles.form}>
                <SelectChallenge />
                <FormLabel textContent={'Title of achievement'} placeholder={'"The Smell of Money"'} child={'input'} />
                <FormLabel
                    textContent={'achievement description'}
                    placeholder={'To get the achievement...'}
                    child={'textarea'}
                />
                <ClipPathBorder className={styles.border} />
                <ModalBackground />
            </form>
        </>
    );
};

export default FormChallenge;
