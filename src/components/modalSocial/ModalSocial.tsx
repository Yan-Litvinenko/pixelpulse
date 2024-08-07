import React from 'react';
import styles from './ModalSocial.module.scss';
import { Cross } from '../cross/Cross';
import { Form } from '../form/Form';
import { ModalBoxButton } from '../modalBoxButton/ModalBoxButton';
import { ModalLoader } from '../modalLoader/ModalLoader';
import { ModalSendState } from '../modalSendState/ModalSendState';
import { stopPropagation } from '../../utils/stopPropagation';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import { useModal } from '../../hooks/useModal';
import type { UseFormSubmit } from '../../hooks/useFormSubmit';

const ModalSocial = (): React.JSX.Element => {
    const closeModalSocial = useModal('social').close;
    const formSubmit: UseFormSubmit = useFormSubmit('Вам отправили сообщение!', 'social');

    const { successfullyTelegram, errorTelegram, loadingTelegram } = formSubmit;
    const { registerForm, handleSubmitForm, isValidForm, errorForm } = formSubmit;
    const { setErrorTelegram, setLoadingTelegram, setSuccessfullyTelegram } = formSubmit;

    return (
        <>
            <div className={styles.modal} onClick={closeModalSocial}>
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
                <form className={styles.modal__inner} onSubmit={handleSubmitForm} onClick={stopPropagation}>
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>connect with me</h3>
                        <Cross handler={closeModalSocial} />
                    </div>
                    <h4 className={styles.modal__subtitle}>wanna chat? Or just share something cool?</h4>
                    <Form register={registerForm} errors={errorForm} />
                    <ModalBoxButton
                        handleEnter={handleSubmitForm}
                        handleEscape={closeModalSocial}
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

export { ModalSocial };
