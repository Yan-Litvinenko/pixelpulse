import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';

import epic from '../../assets/images/epic.png';
import legendary from '../../assets/images/legendary.png';
import rare from '../../assets/images/rare.png';
import unusual from '../../assets/images/unusual.png';

import { Rarity, AchievedStatus } from '../../interfaces/interface.achievements';
import styles from './AchievementsAchieve.module.scss';

interface IAchievementsAchieve {
    date: string;
    description: string;
    rarity: Rarity;
    status: AchievedStatus;
    title: string | 'ongoing';
}

const AchievementsAchieve = (props: IAchievementsAchieve): React.JSX.Element => {
    const rarity = { legendary, epic, rare, unusual };

    const getAchieveClassName = (): string => {
        const classes: string[] = [styles.achieve, styles[`achieve_${props.rarity}`]];

        if (props.status === 'in progress') {
            classes.push(styles.ongoing_status);
        }

        return classes.join(' ');
    };

    return (
        <div className={getAchieveClassName()}>
            <figure className={styles.box_image}>
                <img className={styles.box_image__image} src={rarity[props.rarity]} alt="achieve" />
                <figcaption className={styles.box_image__rarity}>{props.rarity}</figcaption>
            </figure>

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
