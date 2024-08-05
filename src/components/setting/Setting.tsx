import React from 'react';
import { SettingElement } from '../settingElement/SettingElement';
import { useAppContext } from '../../hooks/useAppContext';
import { useModal } from '../../hooks/useModal';
import type { ISetting } from '../../interfaces/interface.component';

const Setting = (props: ISetting): React.JSX.Element => {
    const { sounds, setSounds, music, setMusic, mainMusic } = useAppContext();
    const closeNavigationMobile = useModal('navigationMobile').close;
    const openModalSettings = useModal('settings').open;
    const { className } = props;

    return (
        <div className={className.settings}>
            <SettingElement
                audioClassName={`${className.checkbox} ${!sounds && className.checkbox__deactive}`}
                className={`${className.audio} ${!sounds && className.audio__deactive}`}
                image="status"
                onClick={() => setSounds((prev) => !prev)}
                textContent="Sounds Effects"
            />
            <SettingElement
                audioClassName={`${className.checkbox} ${!music && className.checkbox__deactive}`}
                className={`${className.audio} ${!music && className.audio__deactive}`}
                image="status"
                onClick={() => {
                    setMusic((prev) => {
                        const changeState: boolean = !prev;

                        if (changeState) {
                            mainMusic.play().catch((error) => {
                                console.error('Failed to play music:', error);
                            });
                        } else {
                            mainMusic.pause();
                        }

                        return changeState;
                    });
                }}
                textContent="Music"
            />
            <SettingElement
                className={className.visual}
                onClick={() => {
                    closeNavigationMobile();
                    openModalSettings();
                }}
                image="gear"
                textContent="Visual Settings"
            />
        </div>
    );
};

export { Setting };
