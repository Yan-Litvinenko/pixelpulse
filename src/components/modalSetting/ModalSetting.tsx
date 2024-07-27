import React from 'react';
import { ClipPathBorder } from '../clipPathBorder/ClipPathBorder';
import { Cross } from '../cross/Cross';
import { ModalBackground } from '../modalBackground/ModalBackground';
import { ModalBoxButton } from '../modalBoxButton/ModalBoxButton';
import { useAppContext } from '../../hooks/useAppContext';
import { useModalSettings } from '../../hooks/useModalSettings';
import { Warning } from '../svgIcon/SvgIcon';
import Range from '../range/Range';
import styles from './ModalSetting.module.scss';

const ModalSetting = (): React.JSX.Element => {
    const { setting } = useAppContext();
    const { enterText, settings, handleResetSettings, handleModifySaveSetting, changeSettingValue } =
        useModalSettings();

    return (
        <div className={styles.modal} onClick={setting.closeModal}>
            <div className={styles.modal__inner} onClick={setting.stopPropagation}>
                <div className={styles.modal__box_title}>
                    <h3 className={styles.modal__title}>visual configurator</h3>
                    <Cross handler={setting.closeModal} />
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
                        <button className={styles.default_button} onClick={handleResetSettings} type="button">
                            default settings
                        </button>
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
                    handleEscape={setting.closeModal}
                    isValid={true}
                    textEnter={enterText}
                    textEsc="discard [esc]"
                    typeEnter="submit"
                />
            </div>
        </div>
    );
};

export { ModalSetting };
