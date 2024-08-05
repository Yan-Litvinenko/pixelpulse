import React from 'react';
import GlitchImage from '../glitchImage/GlitchImage';
import avatar from '../../assets/images/avatar.png';
import profileItems from '../../assets/json/profile.json';
import styles from './Profile.module.scss';
import { Frame } from '../frame/Frame';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { ProfileElement } from '../profileElement/ProfileElement';
import { useAppContext } from '../../hooks/useAppContext';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

const Profile = (): React.JSX.Element => {
    const { handleSoundClick } = useAppContext();
    const { isSmall } = useSelector((state: RootState) => state.mediaQuery);

    return (
        <aside className={styles.profile}>
            {isSmall ? null : (
                <Link to="about" className={styles.avatar} onClick={handleSoundClick}>
                    <Frame className={styles.avatar__frame} />
                    <GlitchImage className={styles.canvas} imageUrl={avatar} minDelay={20000} maxDelay={40000} />
                </Link>
            )}

            {profileItems.map((item) => (
                <ProfileElement
                    adjacent={item.adjacent}
                    classRoot={item.classRoot}
                    header={item.header}
                    modal={item.modal as null | 'availability' | 'social'}
                    key={nanoid()}
                />
            ))}

            <div className={styles.motto}>
                <h3 className={styles.motto__title}>motto:</h3>
                <p className={styles.motto__text}>Bonum modulum est, quod connecti potest.</p>
            </div>
        </aside>
    );
};

export { Profile };
