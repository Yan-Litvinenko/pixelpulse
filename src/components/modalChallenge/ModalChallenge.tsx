import React from 'react';
import styles from './ModalChallenge.module.scss';
import { Cross } from '../cross/Cross';
import { FormChallenge } from '../formChallenge/FormChallenge';
import { ModalBoxButton } from '../modalBoxButton/ModalBoxButton';
import { ModalLoader } from '../modalLoader/ModalLoader';
import { ModalSendState } from '../modalSendState/ModalSendState';
import { stopPropagation } from '../../utils/stopPropagation';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import { useModal } from '../../hooks/useModal';
import type { Rarity } from '../../interfaces/interface.achievements';
import type { UseFormSubmit } from '../../hooks/useFormSubmit';

const ModalChallenge = (): React.JSX.Element => {
    const closeModalChallenge = useModal('challenge').close;

    const [selectValue, setSelectValue] = React.useState<Rarity>('unusual');

    const formSubmit: UseFormSubmit = useFormSubmit(
        'Вам предложили проект!',
        'challenge',
    );
    const { successfullyTelegram, errorTelegram, loadingTelegram } = formSubmit;
    const { registerForm, handleSubmitForm, isValidForm, errorForm } =
        formSubmit;
    const { setErrorTelegram, setLoadingTelegram, setSuccessfullyTelegram } =
        formSubmit;

    return (
        <>
            <div className={styles.modal} onClick={closeModalChallenge}>
                {loadingTelegram ? <ModalLoader /> : null}
                {successfullyTelegram ? (
                    <ModalSendState
                        setError={setErrorTelegram}
                        setLoading={setLoadingTelegram}
                        setSuccessfully={setSuccessfullyTelegram}
                        status={successfullyTelegram}
                    />
                ) : (
                    ''
                )}
                {errorTelegram ? (
                    <ModalSendState
                        setError={setErrorTelegram}
                        setLoading={setLoadingTelegram}
                        setSuccessfully={setSuccessfullyTelegram}
                        status={errorTelegram}
                    />
                ) : (
                    ''
                )}
                <form
                    className={styles.modal__inner}
                    onSubmit={handleSubmitForm}
                    onClick={stopPropagation}
                >
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>challenge me</h3>
                        <Cross handler={closeModalChallenge} />
                    </div>
                    <h4 className={styles.modal__subtitle}>
                        Offer me a challenge!
                    </h4>
                    <FormChallenge
                        register={registerForm}
                        errors={errorForm}
                        selectValue={selectValue}
                        setSelectValue={setSelectValue}
                    />
                    <ModalBoxButton
                        handleEnter={handleSubmitForm}
                        handleEscape={closeModalChallenge}
                        isValid={isValidForm}
                        textEnter={'send challenge [enter]'}
                        textEsc={'discard [esc]'}
                        typeEnter="submit"
                    />
                </form>
            </div>
        </>
    );
};

export { ModalChallenge };
