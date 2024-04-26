import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import legendary from '../../assets/images/legendary.png';
import epic from '../../assets/images/epic.png';
import rare from '../../assets/images/rare.png';
import unusual from '../../assets/images/unusual.png';
import { Rarity } from '../../interfaces/interface';
import styles from './AchievementsAchieve.module.scss';

interface IAchievementsAchieve {
    date: string;
    description: string;
    rarity: Rarity;
    title: string | 'ongoing';
    status: 'achieved' | 'in progress';
}

const isActive = (status: string | 'ongoing'): string => {
    if (status === 'in progress') {
        return styles.ongoing_status;
    }

    return '';
};

const AchievementsAchieve = (props: IAchievementsAchieve): React.JSX.Element => {
    const rarity = { legendary, epic, rare, unusual };
    return (
        <div className={`${styles.achieve}  ${styles[`achieve_${props.rarity}`]} ${isActive(props.status)}`}>
            <div className={styles.box_image}>
                <img className={styles.box_image__image} src={rarity[props.rarity]} alt="achieve" />
                <span className={styles.box_image__rarity}>{props.rarity}</span>
            </div>

            <div className={`${styles.achieve__inner}`}>
                <div className={styles.achieve__content}>
                    <Heading className={styles.achieve__title} level="4" textContent={props.title} />
                    <Paragraph className={styles.achieve__description} textContent={props.description} />
                    <div className={styles.achieve__date}>achgieved:{props.date}</div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsAchieve;
