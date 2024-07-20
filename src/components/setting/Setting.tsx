import React from 'react';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import SettingElement from '../settingElement/SettingElement';
import handleOpenModal from '../../utils/handleOpenModal';
import { ISetting } from '../../interfaces/interface.component';

const Setting = (props: ISetting): React.JSX.Element => {
    const contextApp = React.useContext<IContextApp | null>(ContextApp);

    if (!contextApp) return <></>;

    const { sounds, setSounds, music, setMusic, mainMusic, setNavigationMobile, handleSoundModal, setSetting } =
        contextApp;
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
                    setNavigationMobile(false);
                    handleSoundModal();
                    handleOpenModal(setSetting);
                }}
                image="gear"
                textContent="Visual Settings"
            />
        </div>
    );
};

export default Setting;
