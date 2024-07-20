import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import useFormSubmit from '../../hooks/useFormSubmit';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { FormSubmit } from '../../interfaces/interface.form';
import styles from './ModalSocial.module.scss';

const ModalSocial = (): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { setSocial } = contextApp;
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const formSubmit: FormSubmit = useFormSubmit('Вам отправили сообщение!');
    const handleCloseButton = useCloseModal(
        modal,
        setSocial,
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
                        <h3 className={styles.modal__title}>connect with me</h3>
                        <Cross setModalState={setSocial} scrollStatus="on" />
                    </div>
                    <h4 className={styles.modal__subtitle}>wanna chat? Or just share something cool?</h4>
                    <Form register={formSubmit.register} errors={formSubmit.errors} />
                    <ModalBoxButton
                        handleEnter={formSubmit.handleSubmit}
                        handleEscape={handleCloseButton}
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
