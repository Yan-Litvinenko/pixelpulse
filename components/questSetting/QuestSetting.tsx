'use client';

import React from 'react';
import QuestSettingElement from '../questSettingElement/QuestSettingElement';
import useModal from '@/hooks/useModal';
import styles from '@/styles/components/questSetting/QuestSetting.module.scss';
import { musicSelector, soundsSelector } from '@/redux/selectors';
import { setStateMusic } from '@/redux/slice/musicSlice';
import { setStateSounds, soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

export default function QuestSetting(): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const musicState = useSelector(musicSelector);
    const soundsState = useSelector(soundsSelector);

    const closeNavigationMobile = useModal('navigationMobile').close;
    const openModalSettings = useModal('settings').open;

    const initAudioState = {
        checkbox: styles.checkbox__deactive,
        element: styles.audio__deactive,
    };

    const [soundsClass, setSoundsClass] = React.useState(initAudioState);
    const [musicClass, setMusicClass] = React.useState(initAudioState);

    const getClassState = (state: boolean) => {
        return state
            ? { checkbox: '', element: '' }
            : { checkbox: styles.checkbox__deactive, element: styles.audio__deactive };
    };

    React.useEffect(() => {
        setMusicClass(getClassState(musicState.musicState));
        setSoundsClass(getClassState(soundsState.soundsState));
    }, [soundsState.soundsState, musicState.musicState]);

    return (
        <div className={styles.settings}>
            <QuestSettingElement
                classNameCheckbox={`${styles.checkbox} ${soundsClass.checkbox}`}
                classNameElement={`${styles.audio} ${soundsClass.element}`}
                image="status"
                onClick={() => {
                    dispatch(setStateSounds());
                    dispatch(soundsClickTrigger());
                }}
                textContent="Sounds Effects"
            />
            <QuestSettingElement
                classNameCheckbox={`${styles.checkbox} ${musicClass.checkbox}`}
                classNameElement={`${styles.audio} ${musicClass.element}`}
                image="status"
                onClick={() => {
                    dispatch(setStateMusic());
                    dispatch(soundsClickTrigger());
                }}
                textContent="Music"
            />
            <QuestSettingElement
                classNameElement={styles.visual}
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
