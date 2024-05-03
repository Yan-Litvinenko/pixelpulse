import React from 'react';
import { ContextApp } from '../components/app/App';
import { IAppContext } from '../interfaces/interface';
import { IContactFieldsStatus } from '../interfaces/interface.form';

const useEnterButtonModal = () => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return null;

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

export default useEnterButtonModal;
