import React from 'react';
import useFormSubmit from '../../hooks/useFormSubmit';
import useCloseModal from '../../hooks/useCloseModal';
import { ContextApp } from '../app/App';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { IAppContext } from '../../interfaces/interface';
import { FormSubmit } from '../../interfaces/interface.form';
import styles from './ModalAvailability.module.scss';

const ModalAvailability = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return null;

    const { setAvailability } = contextApp;
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const formSubmit: FormSubmit = useFormSubmit('Вам предложили проект!');
    const buttonEscape = useCloseModal(
        modal,
        setAvailability,
        formSubmit.successfully,
        formSubmit.loading,
        formSubmit.error,
    );

    return (
        <>
            <div className={styles.modal} ref={modal}>
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
                <form className={styles.modal__inner} onSubmit={formSubmit.handleSubmit}>
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>open for hire</h3>
                        <Cross setModalState={setAvailability} scrollStatus="on" />
                    </div>
                    <h4 className={styles.modal__subtitle}>I would love to hear about your projects!</h4>
                    <Form register={formSubmit.register} errors={formSubmit.errors} />
                    <ModalBoxButton
                        handleEnter={formSubmit.handleSubmit}
                        handleEscape={buttonEscape}
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
