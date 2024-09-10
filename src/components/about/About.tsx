import React from 'react';
import humanAvif from '../../assets/images/human.avif';
import humanJpg from '../../assets/images/human.jpg';
import humanWebp from '../../assets/images/human.webp';
import styles from './About.module.scss';
import { AboutElement } from '../aboutElement/AboutElement';
import { Frame } from '../frame/Frame';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

const About = (): React.JSX.Element => {
    const { isSmall } = useSelector((state: RootState) => state.mediaQuery);

    return (
        <section className={styles.about}>
            <h2 className={styles.about__title}>who is Yan Litvinenko</h2>

            <div className={styles.about__content}>
                <div className={styles.about__text_content}>
                    <AboutElement
                        textContent={
                            'for the last half of the year i have been immersed in the world of frontend development. my journey started with javascript. soon i started learning react and typescript. i have always been interested in creating a user-friendly and interactive user interface.'
                        }
                        title={'The short introduction of my life'}
                    />
                    <AboutElement
                        textContent={
                            'although i like front end development, i am looking to depend my knowledge in backend development, especially with node.js and databases such as mysql and mongodb. i believe understanding the full stack will make me a more versatile and effective developer.'
                        }
                        title={'Career and development'}
                    />
                    <AboutElement
                        textContent={
                            'My goal is to become a well-rounded full-stack developer. I want to build applications that are not only visually appealing and user-friendly but also robust and efficient on the server side. I am committed to continuous learning and excited to see where this journey takes me.'
                        }
                        title={'More can be added in the left side for summary'}
                    />
                </div>

                {isSmall ? null : (
                    <picture
                        className={styles.box_image}
                        data-testid="about-mobile-picture"
                    >
                        <Frame className={styles.frame} />

                        <source srcSet={humanAvif} />
                        <source srcSet={humanWebp} />
                        <img
                            src={humanJpg}
                            alt="A portrait of Yan Litvinenko"
                            className={styles.about__img}
                        />
                    </picture>
                )}
            </div>
        </section>
    );
};

export { About };
