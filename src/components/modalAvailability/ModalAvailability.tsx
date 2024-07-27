import React from 'react';
import useFormSubmit from '../../hooks/useFormSubmit';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { FormSubmit } from '../../interfaces/interface.form';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './ModalAvailability.module.scss';

const ModalAvailability = (): React.JSX.Element | null => {
    const formSubmit: FormSubmit = useFormSubmit('Вам предложили проект!');
    const { availability } = useAppContext();

    React.useEffect(() => {
        availability.setStatusForm(formSubmit.error || formSubmit.loading || formSubmit.successfully ? true : false);
    }, [formSubmit.error, formSubmit.loading, formSubmit.successfully]);

    return (
        <>
            <div className={styles.modal} onClick={availability.closeModal}>
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
                    onClick={availability.stopPropagation}
                >
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>open for hire</h3>
                        <Cross handler={availability.closeModal} />
                    </div>
                    <h4 className={styles.modal__subtitle}>I would love to hear about your projects!</h4>
                    <Form register={formSubmit.register} errors={formSubmit.errors} />
                    <ModalBoxButton
                        handleEnter={formSubmit.handleSubmit}
                        handleEscape={availability.closeModal}
                        isValid={formSubmit.isValid}
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
