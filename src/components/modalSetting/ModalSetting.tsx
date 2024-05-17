import React from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import Button from '../button/Button';
import ClipPathBorder from '../clipPathBorder/ClipPathBorder';
import Cross from '../cross/Cross';
import Heading from '../heading/Heading';
import ModalBackground from '../modalBackground/ModalBackground';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import Paragraph from '../paragraph/Paragraph';
import Range from '../range/Range';
import handleDefaultSettings from '../../utils/handleDefaultSettings';
import handleInitSettingValue from '../../utils/handleInitSettingValue';
import handleSaveSetting from '../../utils/handleSaveSettings';
import handleSettingColor from '../../utils/handleSettingColor';
import handleSettingSize from '../../utils/handleSettingSize';
import { Warning } from '../svgIcon/SvgIcon';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import styles from './ModalSetting.module.scss';

const ModalSetting = (): React.JSX.Element | null => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return null;

    const modal = React.useRef<HTMLDivElement | null>(null);
    const timer = React.useRef<NodeJS.Timeout | null>(null);
    const [enterText, setEnterText] = React.useState<string>('write to disk [enter]');

    const handleButtonEscape = useCloseModal(modal, contextApp.setSetting, false, false, false);
    const handleCrossModal = (): void => {
        contextApp.setNavigationMobile(true);
        contextApp.setSetting(false);
    };

    const changeSettingValue = handleSettingColor();
    const handleModifySaveSetting = (): void => {
        if (enterText === 'write to disk [enter]') {
            handleSaveSetting();
            setEnterText('saved!');

            timer.current = setTimeout(() => {
                setEnterText('write to disk [enter]');
            }, 2000);
        }
    };

    const handleButtonEnter = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') {
            handleModifySaveSetting();
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleButtonEnter);

        return () => {
            if (timer.current) clearTimeout(timer.current);
            window.removeEventListener('keydown', handleButtonEnter);
        };
    }, []);

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
                            initValue={handleInitSettingValue('hue')}
                            inputTarget="color"
                            max={100}
                            min={0}
                            textContent="hud hue"
                        />
                        <Range
                            changeSettingValue={changeSettingValue}
                            color={'saturation'}
                            initValue={handleInitSettingValue('saturation')}
                            inputTarget="color"
                            max={100}
                            min={0}
                            textContent="hud saturation"
                        />
                        <Range
                            changeSettingValue={changeSettingValue}
                            color={'lightness'}
                            initValue={handleInitSettingValue('lightness')}
                            inputTarget="color"
                            max={100}
                            min={0}
                            textContent="hud lightness"
                        />
                        <Range
                            changeSettingValue={handleSettingSize}
                            initValue={handleInitSettingValue('size')}
                            inputTarget="size"
                            max={100}
                            min={0}
                            textContent="hud size"
                        />
                        <Button
                            className={styles.default_button}
                            delayEvent={false}
                            handleButton={handleDefaultSettings}
                            textContent="default settings"
                            type="button"
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
