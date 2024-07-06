import React from 'react';
import { ContextApp } from '../app/App';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import ProfileElement from '../profileElement/ProfileElement';
import { IAppContext } from '../../interfaces/interface';
import avatar from '../../assets/images/avatar.png';
import profileItems from '../../assets/json/profile.json';
import styles from './Profile.module.scss';

import GlitchImage from '../glitchImage/GlitchImage';

const Profile = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);
    const handleClickAvatar = (): void => {
        contextApp?.handleSoundClick();
    };

    return (
        <aside className={styles.profile}>
            {contextApp?.isMedium ? null : (
                <Link to="about" className={styles.avatar} onClick={handleClickAvatar}>
                    <Frame className={styles.avatar__frame} />
                    <GlitchImage className={styles.canvas} imageUrl={avatar} minDelay={20000} maxDelay={40000} />
                </Link>
            )}

            {profileItems.map((item) => {
                return <ProfileElement adjacent={item.adjacent} header={item.header} key={nanoid()} />;
            })}

            <div className={styles.motto}>
                <Heading className={styles.motto__title} level={'3'} textContent="motto:" />
                <Paragraph className={styles.motto__text} textContent={'Bonum modulum est, quod connecti potest.'} />
            </div>
        </aside>
    );
};

export default Profile;
