import React from 'react';
import useFormSubmit from '../../hooks/useFormSubmit';
import Cross from '../cross/Cross';
import FormChallenge from '../formChallenge/FormChallenge';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { useAppContext } from '../../hooks/useAppContext';
import { FormSubmit } from '../../interfaces/interface.form';
import { Rarity } from '../../interfaces/interface.achievements';
import styles from './ModalChallenge.module.scss';

const ModalChallenge = (): React.JSX.Element => {
    const [selectValue, setSelectValue] = React.useState<Rarity>('unusual');
    const formSubmit: FormSubmit = useFormSubmit('Вам бросили вызов!');
    const { challenge } = useAppContext();

    React.useEffect(() => {
        challenge.setStatusForm(formSubmit.error || formSubmit.loading || formSubmit.successfully ? true : false);
    }, [formSubmit.error, formSubmit.loading, formSubmit.successfully]);

    return (
        <>
            <div className={styles.modal} onClick={challenge.closeModal}>
                {formSubmit.loading ? <ModalLoader /> : null}
                {formSubmit.successfully ? (
                    <ModalSendState
                        setError={formSubmit.setError}
                        setLoading={formSubmit.setLoading}
                        setSuccessfully={formSubmit.setSuccessfully}
                        status={formSubmit.successfully}
                    />
                ) : (
                    ''
                )}
                {formSubmit.error ? (
                    <ModalSendState
                        setError={formSubmit.setError}
                        setLoading={formSubmit.setLoading}
                        setSuccessfully={formSubmit.setSuccessfully}
                        status={formSubmit.error}
                    />
                ) : (
                    ''
                )}
                <form
                    className={styles.modal__inner}
                    onSubmit={formSubmit.handleSubmit}
                    onClick={challenge.stopPropagation}
                >
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>challenge me</h3>
                        <Cross handler={challenge.closeModal} />
                    </div>
                    <h4 className={styles.modal__subtitle}>Offer me a challenge!</h4>
                    <FormChallenge
                        register={formSubmit.register}
                        errors={formSubmit.errors}
                        selectValue={selectValue}
                        setSelectValue={setSelectValue}
                    />
                    <ModalBoxButton
                        handleEnter={formSubmit.handleSubmit}
                        handleEscape={challenge.closeModal}
                        isValid={formSubmit.isValid}
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
