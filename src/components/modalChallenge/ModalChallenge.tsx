import React from 'react';
import Cross from '../cross/Cross';
import FormChallenge from '../formChallenge/FormChallenge';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { UseFormSubmit, useFormSubmit } from '../../hooks/useFormSubmit';
import { useAppContext } from '../../hooks/useAppContext';
import { Rarity } from '../../interfaces/interface.achievements';
import styles from './ModalChallenge.module.scss';

const ModalChallenge = (): React.JSX.Element => {
    const [selectValue, setSelectValue] = React.useState<Rarity>('unusual');
    const formSubmit: UseFormSubmit = useFormSubmit('Вам предложили проект!');

    const { successfullyTelegram, errorTelegram, loadingTelegram } = formSubmit;
    const { registerForm, handleSubmitForm, isValidForm, errorForm } = formSubmit;
    const { setErrorTelegram, setLoadingTelegram, setSuccessfullyTelegram } = formSubmit;
    const { challenge } = useAppContext();

    React.useEffect(() => {
        challenge.setStatusForm(errorTelegram || loadingTelegram || successfullyTelegram ? true : false);
    }, [errorTelegram, loadingTelegram, successfullyTelegram]);

    return (
        <>
            <div className={styles.modal} onClick={challenge.closeModal}>
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
                <form className={styles.modal__inner} onSubmit={handleSubmitForm} onClick={challenge.stopPropagation}>
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>challenge me</h3>
                        <Cross handler={challenge.closeModal} />
                    </div>
                    <h4 className={styles.modal__subtitle}>Offer me a challenge!</h4>
                    <FormChallenge
                        register={registerForm}
                        errors={errorForm}
                        selectValue={selectValue}
                        setSelectValue={setSelectValue}
                    />
                    <ModalBoxButton
                        handleEnter={handleSubmitForm}
                        handleEscape={challenge.closeModal}
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

export default ModalChallenge;
