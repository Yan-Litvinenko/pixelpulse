import React from 'react';
import { ContextApp } from '../app/App';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import ProfileElement from '../profileElement/ProfileElement';
import { nanoid } from 'nanoid';
import { IAppContext } from '../../interfaces/interfaces';
import profileItems from '../../assets/json/profile.json';
import whale from '../../assets/images/whale_large.jpg';
import styles from './Beginning.module.scss';

const Beginning = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const title: string =
        'swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe';
    const subtitle: string = 'Artwork generated with midjourney';

    return (
        <>
            <main className={styles.beginning}>
                <Frame className={styles.beginning__frame} />
                <div className={styles.beginning__inner}>
                    <div className={styles.beginning__box_title}>
                        <Heading className={styles.beginning__title} textContent={title} level="3" />
                        <Heading className={styles.beginning__subtitle} textContent={subtitle} level="4" />
                    </div>
                    <div className={styles.beginning__background_box}>
                        <Frame className={styles.beginning__background_frame} />
                        <img className={styles.beginning__background} src={whale} alt={whale} />
                    </div>
                    <div className={styles.profile_mobile}>
                        {profileItems.map((item) => {
                            return (
                                <ProfileElement
                                    adjacent={item.adjacent}
                                    header={item.header}
                                    key={nanoid()}
                                    version="mobile"
                                />
                            );
                        })}
                    </div>
                    {!contextApp?.navigationMobile ? <MobileBoxButton /> : null}
                </div>
            </main>
        </>
    );
};

export default Beginning;
