'use client';

import React from 'react';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import Cross from '../cross/Cross';
import FormModalBackground from '../formModalBackground/FormModalBackground';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import Range from '../range/Range';
import stopPropagation from '@/helpers/stopPropagation';
import useModal from '../../hooks/useModal';
import useModalSettings from '@/hooks/useModalSettings';
import styles from '@/styles/components/modalSettings/ModalSettings.module.scss';
import { Warning } from '../svgIcon/SvgIcon';

export default function ModalSetting(): React.JSX.Element {
    const closeModalSettings = useModal('settings').close;
    const { enterBtnText, inputValue, handleDefault, transformSaveFn, changeSettingValue } = useModalSettings();

    return (
        <article className={styles.modal} onClick={closeModalSettings}>
            <div className={styles.modal__inner} onClick={stopPropagation}>
                <div className={styles.modal__box_title}>
                    <h3 className={styles.modal__title}>visual configurator</h3>
                    <Cross handler={closeModalSettings} />
                </div>
                <h4 className={styles.modal__subtitle}>apply what works best for you</h4>

                <div className={styles.modal__content}>
                    <div className={styles.modal__setting}>
                        <Range
                            changeSettingValue={changeSettingValue}
                            inputValue={inputValue.hue}
                            inputTarget="color"
                            max={100}
                            min={0}
                            textContent="hud color"
                        />
                        <Range
                            changeSettingValue={changeSettingValue}
                            inputValue={inputValue.size}
                            inputTarget="size"
                            max={100}
                            min={0}
                            textContent="hud size"
                        />
                        <button className={styles.default_button} onClick={handleDefault} type="button">
                            default settings
                        </button>
                        <ClipPathBorder className={styles.border} />
                        <FormModalBackground />
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
                    handleEnter={transformSaveFn}
                    handleEscape={closeModalSettings}
                    isValid={true}
                    textEnter={enterBtnText}
                    textEsc="discard [esc]"
                    typeEnter="submit"
                />
            </div>
        </article>
    );
}
