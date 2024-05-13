import React from 'react';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { Triangle } from 'react-loader-spinner';
import beginningAvif from '../../assets/images/beginning.avif';
import beginningWebp from '../../assets/images/beginning.webp';
import beginningJpg from '../../assets/images/beginning.jpg';
import styles from './Beginning.module.scss';

const Beginning = (): React.JSX.Element => {
    const [load, setLoad] = React.useState<boolean>(true);
    const title: string =
        'swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe';
    const subtitle: string = 'Artwork generated with midjourney';

    React.useEffect(() => setLoad(false), []);

    return (
        <>
            <main className={styles.beginning}>
                <Frame className={styles.beginning__frame} />
                <div className={styles.beginning__inner}>
                    {load ? (
                        <Triangle
                            visible={true}
                            height="80"
                            width="80"
                            color="rgb(232, 74, 74)"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass={styles.loader}
                        />
                    ) : (
                        <>
                            <div className={styles.beginning__box_title}>
                                <Heading className={styles.beginning__title} textContent={title} level="3" />
                                <Heading className={styles.beginning__subtitle} textContent={subtitle} level="4" />
                            </div>
                            <picture className={styles.beginning__background_box}>
                                <Frame className={styles.beginning__background_frame} />
                                <source srcSet={beginningAvif} />
                                <source srcSet={beginningWebp} />
                                <img
                                    alt={'whale'}
                                    className={styles.beginning__background}
                                    draggable={false}
                                    src={beginningJpg}
                                />
                            </picture>
                        </>
                    )}
                </div>
            </main>
        </>
    );
};

export default Beginning;
