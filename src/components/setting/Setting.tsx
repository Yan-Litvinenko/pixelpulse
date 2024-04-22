import React from 'react';
import { ContextApp } from '../app/App';
import SettingElement from '../settingElement/SettingElement';
import handleOpenModal from '../../utils/handleOpenModal';
import { IAppContext } from '../../interfaces/interfaces';

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
                onClick={() => contextApp?.setMusic((prev) => !prev)}
                textContent="Music"
            />
            <SettingElement
                className={className.visual}
                onClick={() => handleOpenModal(contextApp?.setSetting, contextApp?.isMobile!)}
                image="gear"
                textContent="Visual Settings"
            />
        </div>
    );
};

export default Setting;
