import React from 'react';
import Cross from '../cross/Cross';
import FormContent from '../formContent/FormContent';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import stopPropagation from '@/helpers/stopPropagation';
import useModal from '../../hooks/useModal';
import styles from '@/styles/components/modalSocial/ModalSocial.module.scss';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import type { UseFormSubmit } from '@/interface/form/form.interface';

export default function ModalSocial(): React.JSX.Element {
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
                    <FormContent register={registerForm} errors={errorForm} />
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
}
