import React from 'react';
import useFormSubmit from '../../hooks/useFormSubmit';
import useCloseModalAndKey from '../../hooks/useCloseModalAndKey';
import { ContextApp } from '../app/App';
import Cross from '../cross/Cross';
import FormChallenge from '../formChallenge/FormChallenge';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { IAppContext } from '../../interfaces/interface';
import { FormSubmit } from '../../interfaces/interface.form';
import { Rarity } from '../../interfaces/interface.achievements';
import styles from './ModalChallenge.module.scss';

const ModalChallenge = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return null;

    const [selectValue, setSelectValue] = React.useState<Rarity>('unusual');
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const formSubmit: FormSubmit = useFormSubmit('Вам бросили вызов!');

    useCloseModalAndKey(modal, contextApp.setChallenge, formSubmit.successfully, formSubmit.loading, formSubmit.error);

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
                        <Heading className={styles.modal__title} level="3" textContent={'challenge me'} />
                        <Cross setModalState={() => contextApp?.setChallenge(false)} scrollStatus="on" />
                    </div>
                    <Heading className={styles.modal__subtitle} level="4" textContent={'Offer me a challenge!'} />
                    <FormChallenge
                        register={formSubmit.register}
                        errors={formSubmit.errors}
                        selectValue={selectValue}
                        setSelectValue={setSelectValue}
                    />
                    <ModalBoxButton
                        isValid={formSubmit.isValid}
                        setModalStatus={contextApp.setChallenge}
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
