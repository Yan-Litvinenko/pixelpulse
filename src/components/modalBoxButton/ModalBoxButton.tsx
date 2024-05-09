import React from 'react';
import useCloseModalButton from '../../hooks/useCloseModalButton';
import { BooleanState } from '../../interfaces/interface';
import styles from './ModalBoxButton.module.scss';

interface IModalBoxButton {
    setModalStatus: BooleanState;
    typeEnter: 'submit' | 'button';
    textEnter: string;
    textEsc: string;
    isValid?: boolean;
    handleEnter?: () => void;
}

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element | null => {
    const buttonEscape = React.useRef<null | HTMLButtonElement>(null);
    const buttonEnter = React.useRef<null | HTMLButtonElement>(null);

    useCloseModalButton(buttonEscape, props.setModalStatus);

    return (
        <div className={styles.box}>
            <button className={styles.box__enter} ref={buttonEnter} type={props.typeEnter} disabled={!props.isValid}>
                {props.textEnter}
            </button>
            <button className={styles.box__esc} ref={buttonEscape} type="button">
                {props.textEsc}
            </button>
        </div>
    );
};

export default ModalBoxButton;
