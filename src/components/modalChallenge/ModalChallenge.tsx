import React from 'react';
import useCloseKeydownModal from '../../hooks/useCloseKeydownModal';
import useTelegramApi from '../../hooks/useTelegramApi';
import useCloseModal from '../../hooks/useCloseModal';
import { useForm } from 'react-hook-form';
import { ContextApp } from '../app/App';
import Cross from '../cross/Cross';
import FormChallenge from '../formChallenge/FormChallenge';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import ModalLoader from '../modalLoader/ModalLoader';
import ModalSendState from '../modalSendState/ModalSendState';
import { IAppContext } from '../../interfaces/interface';
import { Rarity } from '../../interfaces/interface.achievements';
import styles from './ModalChallenge.module.scss';

const ModalChallenge = () => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modal: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    if (!contextApp) return null;

    const [selectValue, setSelectValue] = React.useState<Rarity>('unusual');
    const {
        formState: { errors, isValid },
        handleSubmit,
        register,
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const [successfully, loading, error, setSuccessfully, setLoading, setError, sendMessage] = useTelegramApi();
    const closeKeydown: (event: KeyboardEvent) => void = useCloseKeydownModal(contextApp.setAvailability);

    const onSubmit = (data: Record<string, string>): void => {
        sendMessage(data, 'Вам бросили вызов!');
        setSelectValue('unusual');
        reset();
    };

    useCloseModal(modal, contextApp.setChallenge, contextApp.TRANSITION_TIME);

    return (
        <>
            <div className={styles.modal} ref={modal}>
                {loading ? <ModalLoader /> : null}
                {successfully ? (
                    <ModalSendState
                        closeKeydown={closeKeydown}
                        setError={setError}
                        setLoading={setLoading}
                        setSuccessfully={setSuccessfully}
                        status={successfully}
                    />
                ) : (
                    ''
                )}
                {error ? (
                    <ModalSendState
                        closeKeydown={closeKeydown}
                        setError={setError}
                        setLoading={setLoading}
                        setSuccessfully={setSuccessfully}
                        status={error}
                    />
                ) : (
                    ''
                )}
                <form className={styles.modal__inner} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.modal__box_title}>
                        <Heading className={styles.modal__title} level="3" textContent={'challenge me'} />
                        <Cross setModalState={() => contextApp?.setChallenge(false)} scrollStatus="on" />
                    </div>
                    <Heading className={styles.modal__subtitle} level="4" textContent={'Offer me a challenge!'} />
                    <FormChallenge
                        register={register}
                        errors={errors}
                        selectValue={selectValue}
                        setSelectValue={setSelectValue}
                    />
                    <ModalBoxButton
                        isValid={isValid}
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
