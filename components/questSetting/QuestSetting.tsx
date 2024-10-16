'use client';

import React from 'react';
import QuestSettingElement from '../questSettingElement/QuestSettingElement';
import useModal from '@/hooks/useModal';
import { musicSelector, soundsSelector } from '@/redux/selectors';
import { setStateMusic } from '@/redux/slice/musicSlice';
import { setStateSounds, soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

export default function QuestSetting(): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const music = useSelector(musicSelector);
    const sounds = useSelector(soundsSelector);

    const closeNavigationMobile = useModal('navigationMobile').close;
    const openModalSettings = useModal('settings').open;

    const initAudioState = {
        checkbox: 'checkbox__deactive',
        element: 'audio__deactive',
    };

    const [soundsClass, setSoundsClass] = React.useState(initAudioState);
    const [musicClass, setMusicClass] = React.useState(initAudioState);

    const getClassState = (state: boolean) => {
        return state ? { checkbox: '', element: '' } : { checkbox: 'checkbox__deactive', element: 'audio__deactive' };
    };

    React.useEffect(() => {
        setMusicClass(getClassState(music.musicState));
        setSoundsClass(getClassState(sounds.soundsState));
    }, [sounds.soundsState, music.musicState]);

    return (
        <div className={'settings'}>
            <QuestSettingElement
                classNameCheckbox={`${'checkbox'} ${soundsClass.checkbox}`}
                classNameElement={`${'audio'} ${soundsClass.element}`}
                image="status"
                onClick={() => {
                    dispatch(setStateSounds());
                    dispatch(soundsClickTrigger());
                }}
                textContent="Sounds Effects"
            />
            <QuestSettingElement
                classNameCheckbox={`${'checkbox'} ${musicClass.checkbox}`}
                classNameElement={`${'audio'} ${musicClass.element}`}
                image="status"
                onClick={() => {
                    dispatch(setStateMusic());
                    dispatch(soundsClickTrigger());
                }}
                textContent="Music"
            />
            <QuestSettingElement
                classNameElement={'visual'}
                classNameCheckbox="null"
                onClick={() => {
                    closeNavigationMobile();
                    openModalSettings();
                }}
                image="gear"
                textContent="Visual Settings"
            />
        </div>
    );
}
