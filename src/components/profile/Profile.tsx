import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Frame } from '../frame/Frame';
import ProfileElement from '../profileElement/ProfileElement';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import avatar from '../../assets/images/avatar.png';
import profileItems from '../../assets/json/profile.json';
import styles from './Profile.module.scss';

import GlitchImage from '../glitchImage/GlitchImage';

const Profile = (): React.JSX.Element => {
    const contextApp = React.useContext<IContextApp | null>(ContextApp);

    if (!contextApp) return <></>;

    const { handleSoundClick, isMedium } = contextApp;

    const clickAvatar = (): Promise<void> | null => handleSoundClick();

    return (
        <aside className={styles.profile}>
            {isMedium ? null : (
                <Link to="about" className={styles.avatar} onClick={clickAvatar}>
                    <Frame className={styles.avatar__frame} />
                    <GlitchImage className={styles.canvas} imageUrl={avatar} minDelay={20000} maxDelay={40000} />
                </Link>
            )}

            {profileItems.map((item) => {
                return <ProfileElement adjacent={item.adjacent} header={item.header} key={nanoid()} />;
            })}

            <div className={styles.motto}>
                <h3 className={styles.motto__title}>motto:</h3>
                <p className={styles.motto__text}>Bonum modulum est, quod connecti potest.</p>
            </div>
        </aside>
    );
};

export default Profile;
