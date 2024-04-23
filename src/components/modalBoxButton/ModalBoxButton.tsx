import React from 'react';
import scroll from '../../utils/scroll';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalBoxButton.module.scss';

interface IModalBoxButton {
    textEnter: string;
    textEsc: string;
}

const ModalBoxButton = (props: IModalBoxButton): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modalEscape = React.useRef<null | HTMLButtonElement>(null);

    const handleEscape = (): void => {
        contextApp?.setAvailability(false);
        contextApp?.setSocial(false);
        contextApp?.setSetting(false);
        scroll.on();
    };

    const handleEscapeKey = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') handleEscape();
    };

    React.useEffect(() => {
        setTimeout(() => {
            window.addEventListener('keydown', handleEscapeKey);
            modalEscape.current?.addEventListener('click', handleEscape);
        }, contextApp?.TRANSITION_TIME);

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            modalEscape.current?.removeEventListener('click', handleEscape);
        };
    });

    return (
        <div className={styles.box}>
            <button className={styles.box__enter} onClick={() => {}}>
                {props.textEnter}
            </button>
            <button className={styles.box__esc} ref={modalEscape}>
                {props.textEsc}
            </button>
        </div>
    );
};

export default ModalBoxButton;
