import React from 'react';
import AboutElement from '@/components/aboutElement/AboutElement';
import Frame from '@/components/frame/Frame';
import human from '@/public/assets/images/human.webp';
import Image from 'next/image';
import styles from '@/styles/components/about/About.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Who is Yan Litvinenko. The short introduction of my life. Career and development. More can be added in the left side for summary',
    openGraph: {
        title: 'About',
        url: 'https://pixelpulse.by/about',
    },
    twitter: {
        title: 'About',
        description:
            'Who is Yan Litvinenko. The short introduction of my life. Career and development. More can be added in the left side for summary',
    },
};

export default function About(): React.JSX.Element {
    return (
        <section className={styles.about}>
            <h2 className={styles.about__title}>who is Yan Litvinenko</h2>

            <section className={styles.about__content}>
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

                <div className={styles.box_image} data-testid="about-mobile-picture">
                    <Frame className={''} />
                    <Image
                        alt="A portrait of Yan Litvinenko"
                        className={styles.about__img}
                        height={1424}
                        layout="responsive"
                        src={human.src}
                        width={832}
                    />
                </div>
            </section>
        </section>
    );
}
