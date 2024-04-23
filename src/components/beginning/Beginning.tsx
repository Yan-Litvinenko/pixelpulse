import React from 'react';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import whale from '../../assets/images/whale_large.jpg';
import styles from './Beginning.module.scss';

const Beginning = (): React.JSX.Element => {
    const title: string =
        'swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe';
    const subtitle: string = 'Artwork generated with midjourney';

    return (
        <>
            <main className={styles.beginning}>
                <Frame className={styles.beginning__frame} />
                <div className={styles.beginning__inner}>
                    <div className={styles.beginning__box_title}>
                        <Heading className={styles.beginning__title} textContent={title} level="3" />
                        <Heading className={styles.beginning__subtitle} textContent={subtitle} level="4" />
                    </div>
                    <div className={styles.beginning__background_box}>
                        <Frame className={styles.beginning__background_frame} />
                        <img className={styles.beginning__background} src={whale} alt={whale} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Beginning;
