import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { IModalBoxButton } from '../../interfaces/interface.component';
import Button from '../button/Button';
import styles from './ModalBoxButton.module.scss';

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { handleEnter, isValid, textEnter, typeEnter, handleEscape, textEsc } = props;
    const { handleSoundClick } = contextApp;

    return (
        <div className={styles.box}>
            <Button
                className={`${styles.box__enter} ${!props.isValid ? styles.box__enter_deactive : ''}`}
                delayEvent={true}
                handleButton={() => {
                    handleEnter();
                    handleSoundClick();
                }}
                isValid={!isValid}
                textContent={textEnter}
                type={typeEnter}
            />
            <Button
                className={styles.box__esc}
                delayEvent={true}
                handleButton={handleEscape}
                textContent={textEsc}
                type="button"
            />
        </div>
    );
};

export default ModalBoxButton;
