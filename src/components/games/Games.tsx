import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import ArcanoidImg from '../../assets/images/arcanoid.jpg';
import MarioImg from '../../assets/images/mario.jpg';
import SnakeImg from '../../assets/images/snake.jpg';
import styles from './Games.module.scss';

const Games = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { handleSoundClick } = contextApp;
    const isGameRoute: boolean = useLocation().pathname.includes('/games/');

    return (
        <main className={styles.games}>
            <h2 className={styles.games__title}>mini games</h2>

            {!isGameRoute ? (
                <div className={styles.content}>
                    <div className={styles.game_description}>
                        <p className={styles.game_description__text}>
                            Here you will see a few mini games I implemented in React or in Canvas.
                        </p>
                        <p className={styles.game_description__text}>Have fun!</p>
                    </div>

                    <div className={styles.content__games}>
                        <Link to={'/games/snake'} onClick={handleSoundClick}>
                            <figure className={styles.content__item}>
                                <img src={SnakeImg} alt="Snake" draggable={false} />
                                <figcaption className={styles.content__description}>
                                    <h3 className={styles.content__title}>snake</h3>
                                    <p className={styles.content__text}>classic snake game</p>
                                </figcaption>
                            </figure>
                        </Link>

                        <figure className={`${styles.content__item} ${styles.content__item_deactive}`}>
                            <img src={MarioImg} alt="Mario" draggable={false} />
                            <figcaption className={styles.content__description}>
                                <h3 className={styles.content__title}>dr mario</h3>
                                <p className={styles.content__text}>a dr. mario clone</p>
                            </figcaption>
                        </figure>

                        <figure className={`${styles.content__item} ${styles.content__item_deactive}`}>
                            <img src={ArcanoidImg} alt="Arcanoid" draggable={false} />
                            <figcaption className={styles.content__description}>
                                <h3 className={styles.content__title}>arcanoid</h3>
                                <p className={styles.content__text}>destroy the bricks game</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            ) : (
                <Outlet />
            )}
        </main>
    );
};

export default Games;
