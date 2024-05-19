import React from 'react';
import { ContextApp } from '../app/App';
import SettingElement from '../settingElement/SettingElement';
import handleOpenModal from '../../utils/handleOpenModal';
import { IAppContext } from '../../interfaces/interface';

interface ISetting {
    className: Record<string, string>;
}

const Setting = ({ className }: ISetting): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);

    return (
        <div className={className.settings}>
            <SettingElement
                audioClassName={`${className.checkbox} ${!contextApp?.sounds && className.checkbox__deactive}`}
                className={`${className.audio} ${!contextApp?.sounds && className.audio__deactive}`}
                image="status"
                onClick={() => contextApp?.setSounds((prev) => !prev)}
                textContent="Sounds Effects"
            />
            <SettingElement
                audioClassName={`${className.checkbox} ${!contextApp?.music && className.checkbox__deactive}`}
                className={`${className.audio} ${!contextApp?.music && className.audio__deactive}`}
                image="status"
                onClick={() => {
                    contextApp?.setMusic((prev) => {
                        const changeState: boolean = !prev;

                        if (changeState) {
                            contextApp?.mainMusic.play().catch((error) => {
                                console.error('Failed to play music:', error);
                            });
                        } else {
                            contextApp?.mainMusic.pause();
                        }

                        return changeState;
                    });
                }}
                textContent="Music"
            />
            <SettingElement
                className={className.visual}
                onClick={() => {
                    contextApp?.setNavigationMobile(false);
                    contextApp?.handleSoundModal();
                    handleOpenModal(contextApp?.setSetting);
                }}
                image="gear"
                textContent="Visual Settings"
            />
        </div>
    );
};

export default Setting;
