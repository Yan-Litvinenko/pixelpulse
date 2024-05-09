import React from 'react';
import { useForm } from 'react-hook-form';
import useTelegramApi from './useTelegramApi';
import { FormSubmit } from '../interfaces/interface.form';

const useFormSubmit = (message: string): FormSubmit => {
    const [successfully, loading, error, setSuccessfully, setLoading, setError, sendMessage] = useTelegramApi();

    const {
        formState: { errors, isValid },
        handleSubmit,
        register,
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: Record<string, string>): void => {
        sendMessage(data, message);
        reset();
    };

    const handleKeyPress = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(onSubmit)();
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return {
        error,
        errors,
        isValid,
        loading,
        register,
        successfully,
        setError,
        setLoading,
        setSuccessfully,
        handleSubmit: handleSubmit(onSubmit),
    };
};

export default useFormSubmit;
