import React from 'react';
import AboutElement from '../aboutElement/AboutElement';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import humanAvif from '../../assets/images/human.avif';
import humanWebp from '../../assets/images/human.webp';
import humanJpg from '../../assets/images/human.jpg';
import styles from './About.module.scss';

const content: Record<string, string>[] = [
    {
        title: 'The short introduction of my life',
        text: 'for the last half of the year i have been immersed in the world of frontend development. my journey started with javascript. soon i started learning react and typescript. i have always been interested in creating a user-friendly and interactive user interface.',
    },
    {
        title: 'Career and development',
        text: 'although i like front end development, i am looking to depend my knowledge in backend development, especially with node.js and databases such as mysql and mongodb. i believe understanding the full stack will make me a more versatile and effective developer.',
    },
    {
        title: 'More can be added in the left side for summary',
        text: 'My goal is to become a well-rounded full-stack developer. I want to build applications that are not only visually appealing and user-friendly but also robust and efficient on the server side. I am committed to continuous learning and excited to see where this journey takes me.',
    },
];

const About = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    return (
        <main className={styles.about}>
            <Heading className={styles.about__title} level="2" textContent="who is Yan Litvinenko" />
            <div className={styles.about__content}>
                <div className={styles.about__text_content}>
                    {content.map((item) => (
                        <AboutElement key={nanoid()} text={item.text} title={item.title} />
                    ))}
                </div>
                {contextApp?.isMedium ? null : (
                    <div className={styles.box_image}>
                        <Frame className={styles.frame} />
                        <picture>
                            <source srcSet={humanAvif} />
                            <source srcSet={humanWebp} />
                            <img src={humanJpg} alt="human" className={styles.about__img} />
                        </picture>
                    </div>
                )}
            </div>
        </main>
    );
};

export default About;
