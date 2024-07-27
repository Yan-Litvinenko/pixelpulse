import React from 'react';
import { useFormSubmit, UseFormSubmit } from '../../hooks/useFormSubmit';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './ModalSocial.module.scss';

const ModalSocial = (): React.JSX.Element => {
    const { social } = useAppContext();
    const formSubmit: UseFormSubmit = useFormSubmit('Вам отправили сообщение!');

    const { successfullyTelegram, errorTelegram, loadingTelegram } = formSubmit;
    const { registerForm, handleSubmitForm, isValidForm, errorForm } = formSubmit;
    const { setErrorTelegram, setLoadingTelegram, setSuccessfullyTelegram } = formSubmit;

    React.useEffect(() => {
        social.setStatusForm(errorTelegram || loadingTelegram || successfullyTelegram ? true : false);
    }, [errorTelegram, loadingTelegram, successfullyTelegram]);

    return (
        <>
            <div className={styles.modal} onClick={social.closeModal}>
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
                <form className={styles.modal__inner} onSubmit={handleSubmitForm} onClick={social.stopPropagation}>
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>connect with me</h3>
                        <Cross handler={social.closeModal} />
                    </div>
                    <h4 className={styles.modal__subtitle}>wanna chat? Or just share something cool?</h4>
                    <Form register={registerForm} errors={errorForm} />
                    <ModalBoxButton
                        handleEnter={handleSubmitForm}
                        handleEscape={social.closeModal}
                        isValid={isValidForm}
                        textEnter={'send message [enter]'}
                        textEsc={'discard [esc]'}
                        typeEnter="submit"
                    />
                </form>
            </div>
        </>
    );
};

export default ModalSocial;
