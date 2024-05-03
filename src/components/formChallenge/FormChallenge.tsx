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
                <FormLabel
                    child={'input'}
                    name="title"
                    placeholder={'"The Smell of Money"'}
                    textContent={'Title of achievement'}
                    value=""
                    onChange={() => {}}
                    error={''}
                />
                <FormLabel
                    child={'textarea'}
                    name="description"
                    placeholder={'To get the achievement...'}
                    textContent={'achievement description'}
                    value=""
                    onChange={() => {}}
                    error={''}
                />
                <ClipPathBorder className={styles.border} />
                <ModalBackground />
            </form>
        </>
    );
};

export default FormChallenge;
