import React from 'react';
import { ContextApp } from '../app/App';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import FormLabel from '../formLabel/FormLabel';
import ModalBackground from '../modalBackground/ModalBackground';
import { handleChangeError } from '../../utils/handleChangeValue';
import { IAppContext } from '../../interfaces/interface';
import { IContactFormData, IFormError } from '../../interfaces/interface.form';
import styles from './Form.module.scss';

const Form = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) {
        return null;
    }

    const handleFieldChange = (name: keyof IContactFormData, value: string): void => {
        const error: string | undefined = handleChangeError(name, value);

        contextApp.setContactFormData((prev) => ({ ...prev, [name]: value }));
        contextApp.setContactFormError((prev) => ({ ...prev, [name]: error }) as IFormError);
        contextApp.setContactFieldsStatus((prev) => ({ ...prev, [name]: true }));
    };

    return (
        <form className={styles.form}>
            <FormLabel
                child={'input'}
                error={contextApp.contactFormError.name}
                fieldStatus={contextApp?.contactFieldsStatus.name}
                name="name"
                onChange={handleFieldChange}
                placeholder={'your name'}
                textContent={'How should I call you?'}
                value={contextApp.contactFormData.name}
            />
            <FormLabel
                child={'input'}
                error={contextApp.contactFormError.email}
                fieldStatus={contextApp?.contactFieldsStatus.email}
                name="email"
                onChange={handleFieldChange}
                placeholder={'your.name@example.com'}
                textContent={'Sending from'}
                value={contextApp.contactFormData.email}
            />
            <FormLabel
                child={'textarea'}
                error={contextApp?.contactFormError.message}
                fieldStatus={contextApp?.contactFieldsStatus.message}
                name="message"
                onChange={handleFieldChange}
                placeholder={'Hi, I write to you about ...'}
                textContent={'transmitted data'}
                value={contextApp?.contactFormData.message}
            />
            <ClipPathBorder className={styles.border} />
            <ModalBackground />
        </form>
    );
};

export default Form;
