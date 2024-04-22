import React from 'react';
import { ContextApp } from '../app/App';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import ProfileElement from '../profileElement/ProfileElement';
import { nanoid } from 'nanoid';
import { IAppContext } from '../../interfaces/interfaces';
import avatar from '../../assets/images/avatar.png';
import profileItems from '../../assets/json/profile.json';
import styles from './Profile.module.scss';

const Profile = (): React.JSX.Element => {
    const contextApp = React.useContext<IAppContext | undefined>(ContextApp);
    const handleClickAvatar = (): void => contextApp?.setPage('about');

    return (
        <aside className={styles.profile}>
            <div className={styles.avatar} onClick={handleClickAvatar}>
                <Frame className={styles.avatar__frame} />
                <img src={avatar} alt="avatar" />
            </div>

            {profileItems.map((item) => {
                return (
                    <ProfileElement adjacent={item.adjacent} header={item.header} version="desktop" key={nanoid()} />
                );
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
