import React from 'react';
import Paragraph from '../paragraph/Paragraph';
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
                    <Paragraph className={styles.modal__text} textContent={status ? success : error} />
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
