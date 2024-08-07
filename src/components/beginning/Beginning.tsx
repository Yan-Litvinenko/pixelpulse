import React from 'react';
import beginnintAvif from '../../assets/images/beginning.avif';
import beginnintWebp from '../../assets/images/beginning.webp';
import beginningJpg from '../../assets/images/beginning.jpg';
import styles from './Beginning.module.scss';
import { Frame } from '../frame/Frame';

const Beginning = (): React.JSX.Element => {
    return (
        <>
            <main className={styles.beginning}>
                <div className={styles.beginning__inner}>
                    <>
                        <div className={styles.beginning__box_title}>
                            <h1 className={styles.beginning__title}>
                                swimming through a vast network of interconnected devices and servers, spreading joy and
                                whimsy to users across the globe
                            </h1>
                            <h2 className={styles.beginning__subtitle}>Artwork generated with midjourney</h2>
                        </div>

                        <picture className={styles.beginning__background_box}>
                            <source srcSet={beginnintAvif} />
                            <source srcSet={beginnintWebp} />
                            <img src={beginningJpg} alt="whale" className={styles.beginning__background} />
                            <Frame className={styles.beginning__background_frame} />
                        </picture>
                    </>
                </div>
            </main>
        </>
    );
};

export { Beginning };
