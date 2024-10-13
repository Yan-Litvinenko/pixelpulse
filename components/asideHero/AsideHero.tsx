import React from 'react';
import HeroAvatar from '../heroAvatar/HeroAvatar';
import HeroContacts from '../heroContacts/HeroContacts';
import styles from '@/styles/components/asideHero/AsideHero.module.scss';

export default function AsideHero(): React.JSX.Element {
    return (
        <aside className={styles.hero}>
            <HeroAvatar className={{ avatar: styles.avatar, canvas: styles.canvas, link: styles.avatar__link }} />
            <article className={styles.hero__element}>
                <h2 className={styles.hero__title}>Name</h2>
                <h1 className={styles.hero__text}>Yan Litvinenko</h1>
            </article>

            <article className={styles.hero__element}>
                <h4 className={styles.hero__title}>Occupation</h4>
                <h3 className={styles.hero__text}>Frontend developer</h3>
            </article>

            <article className={styles.hero__element}>
                <h4 className={styles.hero__title}>Corporation</h4>
                <h3 className={styles.hero__text}>in search</h3>
            </article>

            <HeroContacts
                title="availability"
                text="open for hire"
                image="hexagon"
                modal="availability"
                className={{
                    element: styles.hero__element,
                    title: styles.hero__title,
                    button: styles.hero__availability,
                }}
            />
            <HeroContacts
                title="social"
                text="open connection"
                image="bluetooth"
                modal="social"
                className={{
                    element: styles.hero__element,
                    title: styles.hero__title,
                    button: styles.hero__social,
                }}
            />

            <article className={styles.motto}>
                <h4 className={styles.motto__title}>motto:</h4>
                <h3 className={styles.motto__text}>Bonum modulum est, quod connecti potest.</h3>
            </article>
        </aside>
    );
}
