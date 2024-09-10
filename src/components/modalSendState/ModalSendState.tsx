import React from 'react';
import styles from './ModalSendState.module.scss';
import type { IModalSendState } from '../../interfaces/interface.component';

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
                    <p className={styles.modal__text}>
                        {status ? success : error}{' '}
                    </p>
                    <button
                        className={styles.modal__button}
                        onClick={clickOK}
                        type="button"
                    >
                        ok
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ModalSendState };
