import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import useFormSubmit from '../../hooks/useFormSubmit';
import { ContextApp } from '../app/App';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { IAppContext } from '../../interfaces/interface';
import { FormSubmit } from '../../interfaces/interface.form';
import styles from './ModalSocial.module.scss';

const ModalSocial = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

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
                        <Heading className={styles.modal__title} level="3" textContent={'connect with me'} />
                        <Cross setModalState={setSocial} scrollStatus="on" />
                    </div>
                    <Heading
                        className={styles.modal__subtitle}
                        level="4"
                        textContent={'wanna chat? Or just share something cool?'}
                    />
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
