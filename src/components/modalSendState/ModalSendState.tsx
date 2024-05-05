import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import Button from '../button/Button';
import { BooleanState } from '../../interfaces/interface';
import styles from './ModalSendState.module.scss';

interface IModalSendState {
    closeKeydown: (event: KeyboardEvent) => void;
    setError: BooleanState;
    setLoading: BooleanState;
    setSuccessfully: BooleanState;
    status: boolean;
}

const ModalSendState = (props: IModalSendState) => {
    const success: string = 'Your message has been sent successfully!';
    const error: string = 'Connection error. \n Try again later.';

    const handleOK = () => {
        props.setError(false);
        props.setLoading(false);
        props.setSuccessfully(false);
    };

    React.useEffect(() => {
        window.removeEventListener('keydown', props.closeKeydown);

        return () => {
            window.addEventListener('keydown', props.closeKeydown);
        };
    }, []);

    return (
        <div className={styles.modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__content}>
                    <Heading
                        className={styles.modal__title}
                        level="3"
                        textContent={props.status ? 'success' : 'error'}
                    />
                    <Paragraph className={styles.modal__text} textContent={props.status ? success : error} />
                    <Button className={styles.modal__button} onClick={handleOK} textContent="ok" />
                </div>
            </div>
        </div>
    );
};

export default ModalSendState;
