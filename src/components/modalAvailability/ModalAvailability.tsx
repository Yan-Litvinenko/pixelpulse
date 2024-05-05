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
import styles from './ModalAvailability.module.scss';

const ModalAvailability = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    if (!contextApp) return null;

    const [successfully, loading, error, setSuccessfully, setLoading, setError, sendMessage] = useTelegramApi();
    useCloseModal(modal, contextApp.setAvailability, successfully, loading, error);

    const {
        formState: { errors, isValid },
        handleSubmit,
        register,
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: Record<string, string>): void => {
        sendMessage(data, 'Вам предложили проект!');
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
                        <Heading className={styles.modal__title} level="3" textContent={'open for hire'} />
                        <Cross setModalState={contextApp.setAvailability} scrollStatus="on" />
                    </div>
                    <Heading
                        className={styles.modal__subtitle}
                        level="4"
                        textContent={'I would love to hear about your projects!'}
                    />
                    <Form register={register} errors={errors} />
                    <ModalBoxButton
                        isValid={isValid}
                        setModalStatus={contextApp.setAvailability}
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
