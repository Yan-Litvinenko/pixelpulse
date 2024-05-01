import React from 'react';
import { ContextApp } from '../app/App';
import useCloseModal from '../../hooks/useCloseModal';
import Cross from '../cross/Cross';
import FormChallenge from '../formChallenge/FormChallenge';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalChallenge.module.scss';

const ModalChallenge = () => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    if (!contextApp) return null;

    useCloseModal(modal, contextApp.setChallenge, contextApp.TRANSITION_TIME);

    return (
        <>
            <div className={styles.modal} ref={modal}>
                <div className={styles.modal__inner}>
                    <div className={styles.modal__box_title}>
                        <Heading className={styles.modal__title} level="3" textContent={'challenge me'} />
                        <Cross setModalState={() => contextApp?.setChallenge(false)} scrollStatus="on" />
                    </div>
                    <Heading className={styles.modal__subtitle} level="4" textContent={'Offer me a challenge!'} />
                    <FormChallenge />
                    <ModalBoxButton textEnter={'send [enter]'} textEsc={'discard [esc]'} />
                </div>
            </div>
        </>
    );
};

export default ModalChallenge;
