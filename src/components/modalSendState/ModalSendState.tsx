import React from 'react';
import Button from '../button/Button';
import { IModalSendState } from '../../interfaces/interface.component';
import styles from './ModalSendState.module.scss';

const ModalSendState = (props: IModalSendState): React.JSX.Element => {
    const { setError, setLoading, setSuccessfully, status } = props;

    const success: string = 'Your message has been send successfully!';
    const error: string = 'Connection error. \n Try again later.';

    const clickOK = (): void => {
        setError(false);
        setLoading(false);
        setSuccessfully(false);
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__content}>
                    <p className={styles.modal__text}>{status ? success : error} </p>
                    <Button
                        className={styles.modal__button}
                        delayEvent={false}
                        handleButton={clickOK}
                        textContent="ok"
                        type="button"
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalSendState;
