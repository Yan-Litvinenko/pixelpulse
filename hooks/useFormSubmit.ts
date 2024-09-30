import React from 'react';
import useTelegramApi from './useTelegramApi';
import { setModalStateForm } from '@/redux/slice/modalSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import type { Modal } from '@/interface/interface';
import type { UseTelegramApi } from '@/interface/hooks.interface';
import type { UseFormSubmit } from '@/interface/form/form.interface';

const useFormSubmit = (message: string, modalKey: Modal): UseFormSubmit => {
    const dispatch = useDispatch();

    const telegramMessage: UseTelegramApi = useTelegramApi();
    const form = useForm({ mode: 'onChange' });

    const { send } = telegramMessage;
    const { reset, handleSubmit } = form;

    const onSubmit = (data: Record<string, string>): void => {
        send(data, message);
        reset();
    };

    const handleKeyPress = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(onSubmit)();
        }
    };

    React.useEffect(() => {
        dispatch(
            setModalStateForm({
                key: modalKey,
                value: telegramMessage.error || telegramMessage.loading || telegramMessage.successfully ? true : false,
            }),
        );
    }, [telegramMessage.error, telegramMessage.loading, telegramMessage.successfully]);

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return {
        errorForm: form.formState.errors,
        handleSubmitForm: form.handleSubmit(onSubmit),
        isValidForm: form.formState.isValid,
        registerForm: form.register,
        errorTelegram: telegramMessage.error,
        loadingTelegram: telegramMessage.loading,
        setErrorTelegram: telegramMessage.setError,
        setLoadingTelegram: telegramMessage.setLoading,
        setSuccessfullyTelegram: telegramMessage.setSuccessfully,
        successfullyTelegram: telegramMessage.successfully,
    };
};

export { useFormSubmit };
