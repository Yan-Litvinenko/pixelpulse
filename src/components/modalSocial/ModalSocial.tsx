import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import { ContextApp } from '../app/App';
import Cross from '../cross/Cross';
import Form from '../form/Form';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import { IAppContext } from '../../interfaces/interfaces';
import styles from './ModalSocial.module.scss';

const ModalSocial = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    if (!contextApp) return null;

    useCloseModal(modal, [contextApp.setSocial, contextApp.setAvailability], contextApp.TRANSITION_TIME);

    return (
        <>
            <div className={styles.modal} ref={modal}>
                <div className={styles.modal__inner}>
                    <div className={styles.modal__box_title}>
                        <Heading className={styles.modal__title} level="3" textContent={'connect with me'} />
                        <Cross setModalState={() => contextApp.setSocial(false)} />
                    </div>
                    <Heading
                        className={styles.modal__subtitle}
                        level="4"
                        textContent={'wanna chat? Or just share something cool?'}
                    />
                    <Form />
                    <ModalBoxButton textEnter={'send message [enter]'} textEsc={'discard [esc]'} />
                </div>
            </div>
        </>
    );
};

export default ModalSocial;
