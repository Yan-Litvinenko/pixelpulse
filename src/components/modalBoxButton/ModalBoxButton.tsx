import React from 'react';
import scroll from '../../utils/scroll';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalBoxButton.module.scss';

interface IModalBoxButton {
    textEnter: string;
    textEsc: string;
    submit: 'contact' | 'challenge' | 'setting';
}

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modalEscape = React.useRef<null | HTMLButtonElement>(null);

    const handleEnter = (): void => {
        if (contextApp) {
            let submitFields = {};
            switch (props.submit) {
                case 'contact':
                    submitFields = contextApp.contactFormData;
                    break;
                case 'challenge':
                    break;
                case 'setting':
                    break;
            }

            const checkLengthFields: boolean = (Object.values(submitFields) as string[]).every(
                (field) => field.length > 0,
            );
            const errors: boolean = Object.entries(contextApp.formError).length === 0;
            console.log(contextApp.formError);

            if (errors) {
                console.log('все условия выполнены');
            }
        }
    };

    const handleEscape = (): void => {
        if (contextApp) {
            contextApp.setAvailability(false);
            contextApp.setSocial(false);
            contextApp.setSetting(false);
            contextApp.setChallenge(false);
        }
        scroll.on();
    };

    const handleEscapeKey = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') handleEscape();
    };

    React.useEffect(() => {
        if (contextApp?.isLarge || contextApp?.isMedium) {
            window.addEventListener('keydown', handleEscapeKey);
            modalEscape.current?.addEventListener('click', handleEscape);
        } else {
            setTimeout(() => {
                window.addEventListener('keydown', handleEscapeKey);
                modalEscape.current?.addEventListener('click', handleEscape);
            }, contextApp?.TRANSITION_TIME);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            modalEscape.current?.removeEventListener('click', handleEscape);
        };
    });

    return (
        <div className={styles.box}>
            <button className={styles.box__enter} type="button" onClick={handleEnter}>
                {props.textEnter}
            </button>
            <button className={styles.box__esc} type="button" ref={modalEscape}>
                {props.textEsc}
            </button>
        </div>
    );
};

export default ModalBoxButton;
