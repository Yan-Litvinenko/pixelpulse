import React from 'react';
import { ContextApp } from '../app/App';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import FormLabel from '../formLabel/FormLabel';
import ModalBackground from '../modalBackground/ModalBackground';
import { IAppContext, IContactFormData, IFormError } from '../../interfaces/interface';
import styles from './Form.module.scss';
import { handleChangeError } from '../../utils/handleChangeValue';

const Form = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) {
        return null;
    }

    const handleFieldChange = (name: keyof IContactFormData, value: string): void => {
        contextApp.setContactFieldsStatus((prev) => {
            return { ...prev, [name]: true };
        });

        contextApp.setContactFormError((prev) => {
            return { ...prev, [name]: handleChangeError(name, value) } as IFormError;
        });

        contextApp?.setContactFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form className={styles.form}>
            <FormLabel
                child={'input'}
                name="name"
                onChange={handleFieldChange}
                placeholder={'your name'}
                textContent={'How should I call you?'}
                value={contextApp.contactFormData.name}
                error={contextApp.contactFormError.name}
                fieldStatus={contextApp?.contactFieldsStatus.name}
            />
            <FormLabel
                child={'input'}
                name="email"
                onChange={handleFieldChange}
                placeholder={'your.name@example.com'}
                textContent={'Sending from'}
                value={contextApp.contactFormData.email}
                error={contextApp.contactFormError.email}
                fieldStatus={contextApp?.contactFieldsStatus.email}
            />
            <FormLabel
                child={'textarea'}
                name="message"
                onChange={handleFieldChange}
                placeholder={'Hi, I write to you about ...'}
                textContent={'transmitted data'}
                value={contextApp?.contactFormData.message}
                error={contextApp?.contactFormError.message}
                fieldStatus={contextApp?.contactFieldsStatus.message}
            />
            <ClipPathBorder className={styles.border} />
            <ModalBackground />
        </form>
    );
};

export default Form;
