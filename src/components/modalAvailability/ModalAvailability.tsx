import React from 'react';
import styles from './ModalAvailability.module.scss';
import { Cross } from '../cross/Cross';
import { Form } from '../form/Form';
import { ModalBoxButton } from '../modalBoxButton/ModalBoxButton';
import { ModalLoader } from '../modalLoader/ModalLoader';
import { ModalSendState } from '../modalSendState/ModalSendState';
import { stopPropagation } from '../../utils/stopPropagation';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import { useModal } from '../../hooks/useModal';
import type { UseFormSubmit } from '../../hooks/useFormSubmit';

const ModalAvailability = (): React.JSX.Element => {
    const closeModalAvailability = useModal('availability').close;

    const formSubmit: UseFormSubmit = useFormSubmit('Вам предложили проект!', 'availability');
    const { successfullyTelegram, errorTelegram, loadingTelegram } = formSubmit;
    const { registerForm, handleSubmitForm, isValidForm, errorForm } = formSubmit;
    const { setErrorTelegram, setLoadingTelegram, setSuccessfullyTelegram } = formSubmit;

    return (
        <>
            <div className={styles.modal} onClick={closeModalAvailability}>
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
                        <h3 className={styles.modal__title}>open for hire</h3>
                        <Cross handler={closeModalAvailability} />
                    </div>
                    <h4 className={styles.modal__subtitle}>I would love to hear about your projects!</h4>
                    <Form register={registerForm} errors={errorForm} />
                    <ModalBoxButton
                        handleEnter={handleSubmitForm}
                        handleEscape={closeModalAvailability}
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

export { ModalAvailability };
