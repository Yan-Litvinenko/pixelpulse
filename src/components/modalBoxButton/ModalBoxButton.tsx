import React from 'react';
import { ContextApp } from '../app/App';
import useCloseButtonModal from '../../hooks/useCloseButtonModal';
import { BooleanState, IAppContext } from '../../interfaces/interface';
import styles from './ModalBoxButton.module.scss';

interface IModalBoxButton {
    setModalStatus: BooleanState;
    typeEnter: 'submit' | 'button';
    textEnter: string;
    textEsc: string;
    isValid?: boolean;
}

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const buttonEscape = React.useRef<null | HTMLButtonElement>(null);

    useCloseButtonModal(buttonEscape, props.setModalStatus);

    if (!contextApp) return null;

    return (
        <div className={styles.box}>
            <button className={styles.box__enter} type={props.typeEnter} disabled={!props.isValid}>
                {props.textEnter}
            </button>
            <button className={styles.box__esc} type="button" ref={buttonEscape}>
                {props.textEsc}
            </button>
        </div>
    );
};

export default ModalBoxButton;
