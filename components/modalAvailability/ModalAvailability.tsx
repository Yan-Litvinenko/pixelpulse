'use client';

import React from 'react';
import Cross from '../cross/Cross';
import FormContent from '../formContent/FormContent';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import stopPropagation from '@/helpers/stopPropagation';
import useModal from '../../hooks/useModal';
import styles from '@/styles/components/modalAvailability/ModalAvailability.module.scss';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import type { UseFormSubmit } from '@/interface/form/form.interface';

export default function ModalAvailability(): React.JSX.Element {
    const closeModalAvailability = useModal('availability').close;

    const formSubmit: UseFormSubmit = useFormSubmit('Вам предложили проект!', 'availability');
    const { successfullyTelegram, errorTelegram, loadingTelegram } = formSubmit;
    const { registerForm, handleSubmitForm, isValidForm, errorForm } = formSubmit;
    const { setErrorTelegram, setLoadingTelegram, setSuccessfullyTelegram } = formSubmit;

    return (
        <>
            <article className={styles.modal} onClick={closeModalAvailability}>
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
                    <FormContent register={registerForm} errors={errorForm} />
                    <ModalBoxButton
                        handleEnter={handleSubmitForm}
                        handleEscape={closeModalAvailability}
                        isValid={isValidForm}
                        textEnter={'send message [enter]'}
                        textEsc={'discard [esc]'}
                        typeEnter={'submit'}
                    />
                </form>
            </article>
        </>
    );
}
