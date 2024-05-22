import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import ArcanoidImg from '../../assets/images/arcanoid.jpg';
import SnakeImg from '../../assets/images/snake.jpg';
import styles from './Games.module.scss';

const Games = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const isGameRoute: boolean = useLocation().pathname.includes('/games/');

    return (
        <main className={styles.games}>
            <Heading className={styles.games__title} textContent={'mini games'} level="2" />

            {!isGameRoute ? (
                <div className={styles.content}>
                    <div className={styles.game_description}>
                        <Paragraph
                            className={styles.game_description__text}
                            textContent="Here you will see a few mini games I implemented in React or in Canvas."
                        />
                        <Paragraph className={styles.game_description__text} textContent="Have fun!" />
                    </div>

                    <div className={styles.content__games}>
                        <figure className={`${styles.content__item} ${styles.content__item_deactive}`}>
                            <img src={ArcanoidImg} alt="Arcanoid" draggable={false} />
                            <figcaption className={styles.content__description}>
                                <Heading className={styles.content__title} textContent="arcanoid" level="3" />
                                <Paragraph className={styles.content__text} textContent="destroy the bricks game" />
                            </figcaption>
                        </figure>

                        <Link to={'/games/snake'} onClick={() => contextApp?.handleSoundClick()}>
                            <figure className={styles.content__item}>
                                <img src={SnakeImg} alt="Snake" draggable={false} />
                                <figcaption className={styles.content__description}>
                                    <Heading className={styles.content__title} textContent="snake" level="3" />
                                    <Paragraph className={styles.content__text} textContent="classic snake game" />
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                </div>
            ) : (
                <Outlet />
            )}
        </main>
    );
};

export default Games;
