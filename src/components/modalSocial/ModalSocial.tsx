import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import useTelegramApi from '../../hooks/useTelegramApi';
import { useForm } from 'react-hook-form';
import { ContextApp } from '../app/App';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalSocial.module.scss';

const ModalSocial = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    if (!contextApp) return null;

    const [successfully, loading, error, setSuccessfully, setLoading, setError, sendMessage] = useTelegramApi();
    useCloseModal(modal, contextApp.setSocial, successfully, loading, error);

    const {
        formState: { errors, isValid },
        handleSubmit,
        register,
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: Record<string, string>): void => {
        sendMessage(data, 'Вам отправили сообщение!');
        reset();
    };

    return (
        <>
            <div className={styles.modal} ref={modal}>
                {loading ? <ModalLoader /> : null}
                {successfully ? (
                    <ModalSendState
                        setError={setError}
                        setLoading={setLoading}
                        setSuccessfully={setSuccessfully}
                        status={successfully}
                    />
                ) : null}
                {error ? (
                    <ModalSendState
                        setError={setError}
                        setLoading={setLoading}
                        setSuccessfully={setSuccessfully}
                        status={error}
                    />
                ) : null}
                <form className={styles.modal__inner} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.modal__box_title}>
                        <Heading className={styles.modal__title} level="3" textContent={'connect with me'} />
                        <Cross setModalState={contextApp.setSocial} scrollStatus="on" />
                    </div>
                    <Heading
                        className={styles.modal__subtitle}
                        level="4"
                        textContent={'wanna chat? Or just share something cool?'}
                    />
                    <Form register={register} errors={errors} />
                    <ModalBoxButton
                        textEnter={'send message [enter]'}
                        textEsc={'discard [esc]'}
                        typeEnter="submit"
                        setModalStatus={contextApp.setSocial}
                        isValid={isValid}
                    />
                </form>
            </div>
        </>
    );
};

export default ModalSocial;
