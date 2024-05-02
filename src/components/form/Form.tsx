import React from 'react';
import { ContextApp } from '../app/App';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import FormLabel from '../formLabel/FormLabel';
import ModalBackground from '../modalBackground/ModalBackground';
import { IAppContext, IContactFormData } from '../../interfaces/interface';
import styles from './Form.module.scss';
import { handleChangeEmail, handleChangeMessage, handleChangeName } from '../../utils/handleChangeValue';

const Form = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    const handleChange = React.useCallback(
        (name: keyof IContactFormData, value: string): void => {
            contextApp?.setContactFormData((prev) => ({ ...prev, [name]: value }));
        },
        [contextApp?.setContactFormData],
    );

    return (
        <form className={styles.form}>
            <FormLabel
                child={'input'}
                name="name"
                onChange={handleChange}
                placeholder={'your name'}
                textContent={'How should I call you?'}
                value={contextApp?.contactFormData.name || ''}
                error={handleChangeName(contextApp?.contactFormData.name || '')}
            />
            <FormLabel
                child={'input'}
                name="email"
                onChange={handleChange}
                placeholder={'your.name@example.com'}
                textContent={'Sending from'}
                value={contextApp?.contactFormData.email || ''}
                error={handleChangeEmail(contextApp?.contactFormData.email || '')}
            />
            <FormLabel
                child={'textarea'}
                name="message"
                onChange={handleChange}
                placeholder={'Hi, I write to you about ...'}
                textContent={'transmitted data'}
                value={contextApp?.contactFormData.message || ''}
                error={handleChangeMessage(contextApp?.contactFormData.message || '')}
            />
            <ClipPathBorder className={styles.border} />
            <ModalBackground />
        </form>
    );
};

export default Form;
