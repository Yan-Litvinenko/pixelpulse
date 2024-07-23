import React from 'react';
import { IAchievementsAchieve } from '../../interfaces/interface.achievements';
import epic from '../../assets/images/epic.png';
import legendary from '../../assets/images/legendary.png';
import rare from '../../assets/images/rare.png';
import unusual from '../../assets/images/unusual.png';
import styles from './AchievementsAchieve.module.scss';

const AchievementsAchieve = (props: IAchievementsAchieve): React.JSX.Element => {
    const { date, description, rarity, executionStatus, title } = props;
    const rarityPictures = { legendary, epic, rare, unusual };
    const classNameAchieve: string = `${styles.achieve} ${styles[`achieve_${rarity}`]} ${executionStatus === 'in progress' ? styles.ongoing_status : ''}`;

    return (
        <div className={classNameAchieve}>
            <figure className={styles.box_image}>
                <img className={styles.box_image__image} src={rarityPictures[rarity]} alt="achieve" />
                <figcaption className={styles.box_image__rarity}>{rarity}</figcaption>
            </figure>

            <div className={`${styles.achieve__inner}`}>
                <div className={styles.achieve__content}>
                    <h4 className={styles.achieve__title}>{title} </h4>
                    <p className={styles.achieve__description}>{description}</p>
                    <div className={styles.achieve__date}>achgieved:{date}</div>
                </div>
            </div>
        </div>
    );
};

export { AchievementsAchieve };
