import React from 'react';
import useCloseModalAndKey from '../../hooks/useCloseModalAndKey';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import Cross from '../cross/Cross';
import Heading from '../heading/Heading';
import ModalBackground from '../modalBackground/ModalBackground';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import Paragraph from '../paragraph/Paragraph';
import Range from '../range/Range';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalSetting.module.scss';

const ModalSetting = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modal = React.useRef<HTMLDivElement | null>(null);

    if (!contextApp) return null;

    const handleCrossModal = (): void => {
        contextApp.setNavigationMobile(true);
        contextApp.setSetting(false);
    };

    useCloseModalAndKey(modal, contextApp.setSetting, false, false, false);

    return (
        <div className={styles.modal} ref={modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__box_title}>
                    <Heading className={styles.modal__title} level="3" textContent="visual configurator" />
                    <Cross setModalState={handleCrossModal} scrollStatus="off" />
                </div>
                <Heading className={styles.modal__subtitle} level="4" textContent="apply what works best for you" />

                <div className={styles.modal__content}>
                    <div className={styles.modal__setting}>
                        <Range textContent="hud hue" min={0} max={100} />
                        <Range textContent="hud saturation" min={0} max={100} />
                        <Range textContent="hud lightness" min={0} max={100} />
                        <ClipPathBorder className={styles.border} />
                        <ModalBackground />
                    </div>
                    <div className={styles.modal__line}></div>
                    <div className={styles.modal__warning}>
                        <Warning />
                        <Paragraph
                            className={styles.modal__warning_text}
                            textContent="The configuration data is stored in your browser. If you login from a different browser or machine, your settings will not apply."
                        />
                    </div>
                </div>

                <ModalBoxButton
                    textEnter="write to disk [enter]"
                    textEsc="discard [esc]"
                    typeEnter="submit"
                    setModalStatus={contextApp?.setSetting}
                />
            </div>
        </div>
    );
};

function Warning(): React.JSX.Element {
    return (
        <svg
            className={styles.modal__warning_img}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
                fill="#E84A4A"
            />
            <clipPath id="clip0_1_1768">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </svg>
    );
}

export default ModalSetting;
