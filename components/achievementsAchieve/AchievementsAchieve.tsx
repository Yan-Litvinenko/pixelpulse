import React from 'react';
import epic from '@/public/assets/images/epic.png';
import Image from 'next/image';
import legendary from '@/public/assets/images/legendary.png';
import rare from '@/public/assets/images/rare.png';
import unusual from '@/public/assets/images/unusual.png';
import styles from '@/styles/components/achievementsAchieve/AchievementsAchieve.module.scss';
import type { AchievementsAchieveProps, Rarity } from '@/interface/achievements/achievements.interface';

export default function AchievementsAchieve(props: AchievementsAchieveProps): React.JSX.Element {
    const { date, description, rarity, executionStatus, title } = props;
    const rarityPictures: Record<Rarity, Rarity> = {
        legendary: legendary.src,
        epic: epic.src,
        rare: rare.src,
        unusual: unusual.src,
    };
    const classNameAchieve: string = `${styles.achieve} ${styles[`achieve_${rarity}`]} ${executionStatus === 'in progress' ? styles.ongoing_status : ''}`;

    return (
        <article className={classNameAchieve}>
            <figure className={styles.box_image}>
                <Image
                    className={styles.box_image__image}
                    src={rarityPictures[rarity as Rarity]}
                    alt={`Rarity icon representing ${rarity}`}
                    width={110}
                    height={80}
                />
                <figcaption className={styles.box_image__rarity}>{rarity}</figcaption>
            </figure>

            <div className={`${styles.achieve__inner}`}>
                <div className={styles.achieve__content}>
                    <h4 className={styles.achieve__title}>{title} </h4>
                    <p className={styles.achieve__description}>{description}</p>
                    <time dateTime={date} className={styles.achieve__date}>
                        achieved:{date}
                    </time>
                </div>
            </div>
        </article>
    );
}
