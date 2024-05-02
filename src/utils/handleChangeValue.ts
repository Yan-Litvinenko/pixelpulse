export const handleChangeName = (name: string): string => {
    if (!name.trim()) {
        return '';
    } else if (name.length < 2 || name.length > 20) {
        return 'The name should be between 2 and 20 characters long';
    } else if (/[\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/.test(name)) {
        return 'The name cannot contain numbers or special characters';
    } else {
        return '';
    }
};

export const handleChangeEmail = (email: string): string => {
    if (!email.trim()) {
        return '';
    }

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }

    return '';
};

export const handleChangeMessage = (message: string): string => {
    if (!message.trim()) {
        return '';
    }

    if (message.length < 10 && message.length >= 1) {
        return 'Your message is too short, please enter at least 10 characters';
    }

    if (message.length > 1000) {
        return 'Your message is too long, please enter no more than 1000 characters';
    }

    return '';
};

export const handleEmptyField = (str: string): string => {
    if (!str.trim()) {
        return 'name field cannot be empty';
    }

    return '';
};
