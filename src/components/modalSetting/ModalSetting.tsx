import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import useModalSettings from '../../hooks/useModalSettings';
import Button from '../button/Button';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import Cross from '../cross/Cross';
import ModalBackground from '../modalBackground/ModalBackground';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import Range from '../range/Range';
import { Warning } from '../svgIcon/SvgIcon';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalSetting.module.scss';

const ModalSetting = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { setSetting, setNavigationMobile } = contextApp;
    const modal = React.useRef<HTMLDivElement | null>(null);
    const { enterText, settings, handleResetSettings, handleModifySaveSetting, changeSettingValue } =
        useModalSettings();

    const handleButtonEscape = useCloseModal(modal, setSetting, false, false, false);
    const handleCrossModal = (): void => {
        setNavigationMobile(true);
        setSetting(false);
    };

    return (
        <div className={styles.modal} ref={modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__box_title}>
                    <h3 className={styles.modal__title}>visual configurator</h3>
                    <Cross setModalState={handleCrossModal} scrollStatus="off" />
                </div>
                <h4 className={styles.modal__subtitle}>apply what works best for you</h4>

                <div className={styles.modal__content}>
                    <div className={styles.modal__setting}>
                        <Range
                            changeSettingValue={changeSettingValue}
                            color={'hue'}
                            initValue={settings.hue}
                            inputTarget="color"
                            max={100}
                            min={0}
                            textContent="hud color"
                        />
                        <Range
                            changeSettingValue={changeSettingValue}
                            initValue={settings.size}
                            inputTarget="size"
                            max={100}
                            min={0}
                            textContent="hud size"
                        />
                        <Button
                            className={styles.default_button}
                            delayEvent={false}
                            handleButton={handleResetSettings}
                            textContent="default settings"
                            type="button"
                        />
                        <ClipPathBorder className={styles.border} />
                        <ModalBackground />
                    </div>
                    <div className={styles.modal__line}></div>
                    <div className={styles.modal__warning}>
                        <Warning />
                        <p className={styles.modal__warning_text}>
                            The configuration data is stored in your browser. If you login from a different browser or
                            machine, your settings will not apply. Resizing works on screens wider than 1950px
                        </p>
                    </div>
                </div>

                <ModalBoxButton
                    handleEnter={handleModifySaveSetting}
                    handleEscape={handleButtonEscape}
                    isValid={true}
                    textEnter={enterText}
                    textEsc="discard [esc]"
                    typeEnter="submit"
                />
            </div>
        </div>
    );
};

export default ModalSetting;
