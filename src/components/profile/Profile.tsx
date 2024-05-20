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

import GlitchCanvas from '../glitchImage/GlitchImage';

const Profile = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);
    const handleClickAvatar = (): void => {
        contextApp?.handleSoundClick();
    };

    return (
        <aside className={styles.profile}>
            <Link to="about" className={styles.avatar} onClick={handleClickAvatar}>
                <Frame className={styles.avatar__frame} />
                <GlitchCanvas className="" imageUrl={avatar} minDelay={15000} maxDelay={30000} />
            </Link>

            {profileItems.map((item) => {
                return <ProfileElement adjacent={item.adjacent} header={item.header} key={nanoid()} />;
            })}

            <div className={styles.motto}>
                <Heading className={styles.motto__title} level={'3'} textContent="motto:" />
                <Paragraph
                    className={styles.motto__text}
                    textContent={'Saepe omnis neque numquam recusandae laudantium.'}
                />
            </div>
        </aside>
    );
};

export default Profile;
