import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import { useForm } from 'react-hook-form';
import { ContextApp } from '../app/App';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalAvailability.module.scss';

const ModalAvailability = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    if (!contextApp) return null;

    const {
        formState: { errors, isValid },
        handleSubmit,
        register,
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: any): void => {
        alert(`Всё валидно, отправка на сервер: ${JSON.stringify(data)}`);
        reset();
    };

    useCloseModal(modal, contextApp.setAvailability, contextApp.TRANSITION_TIME);

    return (
        <>
            <div className={styles.modal} ref={modal}>
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
