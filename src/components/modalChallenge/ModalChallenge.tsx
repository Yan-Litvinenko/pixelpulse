import React from 'react';
import useFormSubmit from '../../hooks/useFormSubmit';
import useCloseModal from '../../hooks/useCloseModal';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import Cross from '../cross/Cross';
import FormChallenge from '../formChallenge/FormChallenge';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { FormSubmit } from '../../interfaces/interface.form';
import { Rarity } from '../../interfaces/interface.achievements';
import styles from './ModalChallenge.module.scss';

const ModalChallenge = (): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { setChallenge } = contextApp;

    const [selectValue, setSelectValue] = React.useState<Rarity>('unusual');
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const formSubmit: FormSubmit = useFormSubmit('Вам бросили вызов!');
    const buttonEscape = useCloseModal(
        modal,
        setChallenge,
        formSubmit.successfully,
        formSubmit.loading,
        formSubmit.error,
    );

    return (
        <>
            <div className={styles.modal} ref={modal}>
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
                <form className={styles.modal__inner} onSubmit={formSubmit.handleSubmit}>
                    <div className={styles.modal__box_title}>
                        <h3 className={styles.modal__title}>challenge me</h3>
                        <Cross setModalState={() => setChallenge(false)} scrollStatus="on" />
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
                        handleEscape={buttonEscape}
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
