import React from 'react';
import { useForm } from 'react-hook-form';
import useCloseModal from '../../hooks/useCloseModal';
import { ContextApp } from '../app/App';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalSocial.module.scss';

const ModalSocial = (): React.JSX.Element | null => {
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

    useCloseModal(modal, contextApp.setSocial, contextApp.TRANSITION_TIME);

    return (
        <>
            <div className={styles.modal} ref={modal}>
                <form className={styles.modal__inner} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.modal__box_title}>
                        <Heading className={styles.modal__title} level="3" textContent={'connect with me'} />
                        <Cross setModalState={() => contextApp.setSocial(false)} scrollStatus="on" />
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
