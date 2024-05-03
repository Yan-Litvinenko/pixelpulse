import React, { useState } from 'react';
import { IFormError, IContactFormData, IContactFieldsStatus } from '../interfaces/interface.form';

type FormState = [
    IContactFieldsStatus,
    IFormError,
    IContactFormData,
    React.Dispatch<React.SetStateAction<IContactFieldsStatus>>,
    React.Dispatch<React.SetStateAction<IFormError>>,
    React.Dispatch<React.SetStateAction<IContactFormData>>,
];

const useFormContact = (): FormState => {
    const initialStatus: IContactFieldsStatus = { name: true, email: true, message: true };
    const initialError: IFormError = { name: '', email: '', message: '' };
    const initialData: IContactFormData = { name: '', email: '', message: '' };

    const [status, setStatus] = useState<IContactFieldsStatus>(initialStatus);
    const [error, setError] = useState<IFormError>(initialError);
    const [data, setData] = useState<IContactFormData>(initialData);

    return [status, error, data, setStatus, setError, setData];
};

export default useFormContact;
