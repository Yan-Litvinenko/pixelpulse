import React from 'react';
import { SettingElement } from '../settingElement/SettingElement';
import { useModal } from '../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { setStateMusic } from '../../store/musicSlice';
import { setStateSounds, soundsClickTrigger } from '../../store/soundsSlice';
import { useSelector } from 'react-redux';
import type { ISetting } from '../../interfaces/interface.component';
import type { AppDispatch, RootState } from '../../store/store';

const Setting = (props: ISetting): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const { musicState } = useSelector((state: RootState) => state.music);
    const { soundsState } = useSelector((state: RootState) => state.sounds);

    const closeNavigationMobile = useModal('navigationMobile').close;
    const openModalSettings = useModal('settings').open;
    const { className } = props;

    return (
        <div className={className.settings}>
            <SettingElement
                audioClassName={`${className.checkbox} ${!soundsState && className.checkbox__deactive}`}
                className={`${className.audio} ${!soundsState && className.audio__deactive}`}
                image="status"
                onClick={() => {
                    dispatch(setStateSounds());
                    dispatch(soundsClickTrigger());
                }}
                textContent="Sounds Effects"
            />
            <SettingElement
                audioClassName={`${className.checkbox} ${!musicState && className.checkbox__deactive}`}
                className={`${className.audio} ${!musicState && className.audio__deactive}`}
                image="status"
                onClick={() => {
                    dispatch(setStateMusic());
                    dispatch(soundsClickTrigger());
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
