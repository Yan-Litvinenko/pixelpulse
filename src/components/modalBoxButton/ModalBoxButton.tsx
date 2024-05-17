import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import Button from '../button/Button';
import styles from './ModalBoxButton.module.scss';

interface IModalBoxButton {
    handleEnter: () => void;
    handleEscape: () => void;
    isValid?: boolean;
    textEnter: string;
    textEsc: string;
    typeEnter: 'submit' | 'button';
}

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    return (
        <div className={styles.box}>
            <Button
                className={`${styles.box__enter} ${!props.isValid ? styles.box__enter_deactive : ''}`}
                delayEvent={true}
                handleButton={() => {
                    props.handleEnter();
                    contextApp?.handleSoundClick();
                }}
                isValid={!props.isValid}
                textContent={props.textEnter}
                type={props.typeEnter}
            />
            <Button
                className={styles.box__esc}
                delayEvent={true}
                handleButton={props.handleEscape}
                textContent={props.textEsc}
                type="button"
            />
        </div>
    );
};

export default ModalBoxButton;
