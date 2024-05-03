export const handleChangeError = (field: string, value: string) => {
    if (field === 'name') {
        if ((value.length < 2 && value.length > 0) || value.length > 20) {
            return 'The name should be between 2 and 20 characters long';
        }
        if (/[\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/.test(value)) {
            return 'The name cannot contain numbers or special characters';
        }

        return '';
    }

    if (field === 'email') {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value.trim().length) {
            return '';
        }
        if (!emailRegex.test(value)) {
            return 'Please enter a valid email address';
        }
        return '';
    }

    if (field === 'message') {
        if (!field.trim().length) {
            return '';
        } else if (value.length < 10 && value.length >= 1) {
            return 'Your message is too short, please enter at least 10 characters';
        } else if (value.length > 1000) {
            return 'Your message is too long, please enter no more than 1000 characters';
        } else {
            return '';
        }
    }
};

export const handleEmptyField = (str: string): string => {
    if (!str.trim()) {
        return 'name field cannot be empty';
    }

    return '';
};
