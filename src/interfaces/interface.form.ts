type Field = 'name' | 'email' | 'message' | 'title' | 'description';

interface IContactFormData {
    name: string;
    email: string;
    message: string;
}

interface IContactFieldsStatus {
    name: boolean;
    email: boolean;
    message: boolean;
    [key: string]: boolean;
}

interface IFormError extends IContactFormData {
    [key: string]: string;
}

interface IContactForm {
    contactFormData: IContactFormData;
    setContactFormData: React.Dispatch<React.SetStateAction<IContactFormData>>;
}

export { Field, IContactForm, IContactFormData, IContactFieldsStatus, IFormError };
