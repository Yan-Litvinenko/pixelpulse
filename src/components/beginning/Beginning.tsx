import React from 'react';
import { Frame } from '../frame/Frame';
import GlitchImage from '../glitchImage/GlitchImage';
import beginningJpg from '../../assets/images/beginning.jpg';
import styles from './Beginning.module.scss';

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
                        <div className={styles.beginning__background_box}>
                            <GlitchImage
                                className={styles.beginning__background}
                                imageUrl={beginningJpg}
                                minDelay={10000}
                                maxDelay={25000}
                            />
                            <Frame className={styles.beginning__background_frame} />
                        </div>
                    </>
                </div>
            </main>
        </>
    );
};

export { Beginning };
