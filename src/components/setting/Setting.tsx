import React from 'react';
import { musicSelector, soundsSelector } from '../../store/selectors/selectors';
import { setStateMusic } from '../../store/slices/musicSlice';
import { setStateSounds, soundsClickTrigger } from '../../store/slices/soundsSlice';
import { SettingElement } from '../settingElement/SettingElement';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import type { ISetting } from '../../interfaces/interface.component';
import type { AppDispatch } from '../../store/store';

const Setting = (props: ISetting): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const { musicState } = useSelector(musicSelector);
    const { soundsState } = useSelector(soundsSelector);

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
