import React from 'react';
import ArcanoidImg from '@/public/assets/images/arcanoid.jpg';
import MarioImg from '@/public/assets/images/mario.jpg';
import SnakeImg from '@/public/assets/images/snake.jpg';
import GamesElement from '@/components/gamesElement/gamesElement';
import styles from '@/styles/components/gamesPage/GamesPage.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Games',
    description: 'Here you will see a few mini games I implemented in React or in Canvas.',
    openGraph: {
        title: 'Games',
        url: 'https://pixelpulse.by/games',
    },
    twitter: {
        title: 'Games',
        description: 'Here you will see a few mini games I implemented in React or in Canvas.',
    },
};

export default function Games(): React.JSX.Element {
    return (
        <div className={styles.games}>
            <aside className={styles.games__description}>
                <p className={styles.games__description_text}>
                    Here you will see a few mini games I implemented in React or in Canvas.
                </p>
                <p className={styles.games__description_text}>Have fun!</p>
            </aside>

            <section className={styles.games__content}>
                <GamesElement
                    link={'/games/snake'}
                    name="snake"
                    description="classic snake game"
                    imageSrc={SnakeImg.src}
                    isActive={true}
                />
                <GamesElement
                    link={'/games/mario'}
                    name="dr mario"
                    description="a dr. mario clone"
                    imageSrc={MarioImg.src}
                    isActive={false}
                />
                <GamesElement
                    link={'/games/arcanoid'}
                    name="arcanoid"
                    description="destroy the bricks game"
                    imageSrc={ArcanoidImg.src}
                    isActive={false}
                />
            </section>
        </div>
    );
}
