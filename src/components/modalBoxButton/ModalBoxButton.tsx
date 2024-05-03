import React from 'react';
import { ContextApp } from '../app/App';
import useCloseButtonModal from '../../hooks/useCloseButtonModal';
import useEnterButtonModal from '../../hooks/useEnterButtonModal';
import { BooleanState, IAppContext } from '../../interfaces/interface';
import styles from './ModalBoxButton.module.scss';

interface IModalBoxButton {
    setModalStatus: BooleanState;
    submit: 'contact' | 'challenge' | 'setting';
    textEnter: string;
    textEsc: string;
}

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const buttonEscape = React.useRef<null | HTMLButtonElement>(null);

    if (!contextApp) return null;

    useCloseButtonModal(buttonEscape, props.setModalStatus);

    const handleEnter = (): void => {
        if (contextApp) {
            switch (props.submit) {
                case 'contact':
                    useEnterButtonModal();
                    break;
                case 'challenge':
                    break;
                case 'setting':
                    break;
            }
        }
    };

    return (
        <div className={styles.box}>
            <button className={styles.box__enter} type="button" onClick={handleEnter}>
                {props.textEnter}
            </button>
            <button className={styles.box__esc} type="button" ref={buttonEscape}>
                {props.textEsc}
            </button>
        </div>
    );
};

export default ModalBoxButton;
