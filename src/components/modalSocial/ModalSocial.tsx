import React from 'react';
import useFormSubmit from '../../hooks/useFormSubmit';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { useAppContext } from '../../hooks/useAppContext';
import { FormSubmit } from '../../interfaces/interface.form';
import styles from './ModalSocial.module.scss';

const ModalSocial = (): React.JSX.Element => {
    const { social } = useAppContext();
    const formSubmit: FormSubmit = useFormSubmit('Вам отправили сообщение!');

    React.useEffect(() => {
        social.setStatusForm(formSubmit.error || formSubmit.loading || formSubmit.successfully ? true : false);
    }, [formSubmit.error, formSubmit.loading, formSubmit.successfully]);

    return (
        <>
            <div className={styles.modal} onClick={social.closeModal}>
                {formSubmit.loading ? <ModalLoader /> : null}
                {formSubmit.successfully ? (
                    <ModalSendState
                        setError={formSubmit.setError}
                        setLoading={formSubmit.setLoading}
                        setSuccessfully={formSubmit.setSuccessfully}
                        status={formSubmit.successfully}
                    />
                ) : null}
                {formSubmit.error ? (
                    <ModalSendState
                        setError={formSubmit.setError}
                        setLoading={formSubmit.setLoading}
                        setSuccessfully={formSubmit.setSuccessfully}
                        status={formSubmit.error}
                    />
                ) : null}
                <form
                    className={styles.modal__inner}
                    onSubmit={formSubmit.handleSubmit}
                    onClick={social.stopPropagation}
                >
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>connect with me</h3>
                        <Cross handler={social.closeModal} />
                    </div>
                    <h4 className={styles.modal__subtitle}>wanna chat? Or just share something cool?</h4>
                    <Form register={formSubmit.register} errors={formSubmit.errors} />
                    <ModalBoxButton
                        handleEnter={formSubmit.handleSubmit}
                        handleEscape={social.closeModal}
                        isValid={formSubmit.isValid}
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
