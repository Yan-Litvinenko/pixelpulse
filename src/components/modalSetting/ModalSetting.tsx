import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import Cross from '../cross/Cross';
import Heading from '../heading/Heading';
import ModalBackground from '../modalBackground/ModalBackground';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import Paragraph from '../paragraph/Paragraph';
import Range from '../range/Range';
import handleSettingColor from '../../utils/handleSettingColor';
import handleSaveSetting from '../../utils/handleSaveSettings';
import handleInitSettingValue from '../../utils/handleInitSettingValue';
import handleSettingSize from '../../utils/handleSettingSize';
import { Warning } from '../svgIcon/SvgIcon';
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

    const handleButtonEscape = useCloseModal(modal, contextApp.setSetting, false, false, false);
    const changeSettingValue = handleSettingColor();

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
                        <Range
                            changeSettingValue={changeSettingValue}
                            color={'hue'}
                            inputTarget="color"
                            max={100}
                            min={0}
                            textContent="hud hue"
                            initValue={handleInitSettingValue('hue')}
                        />
                        <Range
                            changeSettingValue={changeSettingValue}
                            color={'saturation'}
                            inputTarget="color"
                            max={100}
                            min={0}
                            textContent="hud saturation"
                            initValue={handleInitSettingValue('saturation')}
                        />
                        <Range
                            changeSettingValue={changeSettingValue}
                            color={'lightness'}
                            inputTarget="color"
                            max={100}
                            min={0}
                            textContent="hud lightness"
                            initValue={handleInitSettingValue('lightness')}
                        />
                        <Range
                            changeSettingValue={handleSettingSize}
                            inputTarget="size"
                            max={100}
                            min={0}
                            textContent="hud size"
                            initValue={handleInitSettingValue('size')}
                        />
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
                    handleEnter={handleSaveSetting}
                    handleEscape={handleButtonEscape}
                    isValid={true}
                    textEnter="write to disk [enter]"
                    textEsc="discard [esc]"
                    typeEnter="submit"
                />
            </div>
        </div>
    );
};

export default ModalSetting;
