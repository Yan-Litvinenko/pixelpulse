import React from 'react';
import { useFormSubmit, UseFormSubmit } from '../../hooks/useFormSubmit';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './ModalAvailability.module.scss';

const ModalAvailability = (): React.JSX.Element => {
    const { availability } = useAppContext();
    const formSubmit: UseFormSubmit = useFormSubmit('Вам предложили проект!');

    const { successfullyTelegram, errorTelegram, loadingTelegram } = formSubmit;
    const { registerForm, handleSubmitForm, isValidForm, errorForm } = formSubmit;
    const { setErrorTelegram, setLoadingTelegram, setSuccessfullyTelegram } = formSubmit;

    React.useEffect(() => {
        availability.setStatusForm(errorTelegram || loadingTelegram || successfullyTelegram ? true : false);
    }, [errorTelegram, loadingTelegram, successfullyTelegram]);

    return (
        <>
            <div className={styles.modal} onClick={availability.closeModal}>
                {loadingTelegram ? <ModalLoader /> : null}
                {successfullyTelegram ? (
                    <ModalSendState
                        setError={setErrorTelegram}
                        setLoading={setLoadingTelegram}
                        setSuccessfully={setSuccessfullyTelegram}
                        status={successfullyTelegram}
                    />
                ) : null}
                {errorTelegram ? (
                    <ModalSendState
                        setError={setErrorTelegram}
                        setLoading={setLoadingTelegram}
                        setSuccessfully={setSuccessfullyTelegram}
                        status={errorTelegram}
                    />
                ) : null}
                <form
                    className={styles.modal__inner}
                    onSubmit={handleSubmitForm}
                    onClick={availability.stopPropagation}
                >
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>open for hire</h3>
                        <Cross handler={availability.closeModal} />
                    </div>
                    <h4 className={styles.modal__subtitle}>I would love to hear about your projects!</h4>
                    <Form register={registerForm} errors={errorForm} />
                    <ModalBoxButton
                        handleEnter={handleSubmitForm}
                        handleEscape={availability.closeModal}
                        isValid={isValidForm}
                        textEnter={'send message [enter]'}
                        textEsc={'discard [esc]'}
                        typeEnter={'submit'}
                    />
                </form>
            </div>
        </>
    );
};

export default ModalAvailability;
