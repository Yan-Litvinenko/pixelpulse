import React from 'react';
import { ContextApp } from '../app/App';
import useCloseButtonModal from '../../hooks/useCloseButtonModal';
import { BooleanState, IAppContext, IContactFieldsStatus } from '../../interfaces/interface';
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

    if (!contextApp) {
        return null;
    }

    useCloseButtonModal(buttonEscape, props.setModalStatus);

    const handleContactSubmit = () => {
        const { contactFormData, contactFormError, setContactFieldsStatus } = contextApp;

        const allFieldsFilled: boolean = Object.values(contactFormData).every((field) => field.length > 0);
        const noErrors: boolean = Object.values(contactFormError).every((field) => field.length === 0);

        if (!allFieldsFilled) {
            setContactFieldsStatus((prev) => {
                const errorFields: IContactFieldsStatus = Object.entries(contextApp.contactFormData).reduce(
                    (acc, [key, value]) => {
                        if (value.length === 0) {
                            prev[key] = false;
                        }

                        return acc;
                    },
                    prev,
                );

                return { ...errorFields };
            });
        }

        if (allFieldsFilled && noErrors) {
            console.log('отправка данных на телегу');
        }
    };

    const handleEnter = (): void => {
        if (contextApp) {
            switch (props.submit) {
                case 'contact':
                    handleContactSubmit();
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
