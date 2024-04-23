import React from 'react';
import AboutElement from '../aboutElement/AboutElement';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import human from '../../assets/images/human.jpg';
import styles from './About.module.scss';

const content = [
    {
        title: 'The short introduction of my life',
        text: "I have always been fascinated by the endless possibilities of the internet and the ways it can be leveraged to make our lives better. I decided to pursue a career in web engineering to help build innovative and impactful web-based solutions that can solve complex problems and make a difference in people's lives.",
    },
    {
        title: 'Career and development',
        text: 'Throughout my career, I have worked with a wide range of technologies, from front-end frameworks like React and Angular to back-end frameworks like Node.js and Django. I am passionate about staying up-to-date with the latest industry trends and tools and continually learning new skills to improve my craft.',
    },
    {
        title: 'More can be added in the left side for summary',
        text: 'As a web engineer, my top priority is to ensure the reliability, scalability, and security of the web applications I develop. I enjoy collaborating with cross-functional teams and working closely with clients to understand their needs and provide them with the best possible solutions.',
    },
];

const About = (): React.JSX.Element => {
    return (
        <main className={styles.about}>
            <Frame className={styles.about__frame} />
            <Heading className={styles.about__title} level="2" textContent="who is Yan Litvinenko" />
            <div className={styles.about__content}>
                <div className={styles.about__text_content}>
                    {content.map((item) => (
                        <AboutElement key={nanoid()} text={item.text} title={item.title} />
                    ))}
                </div>
                <div className={styles.box_image}>
                    <img className={styles.about__img} src={human} alt="human" />
                    <Frame />
                </div>
            </div>
        </main>
    );
};

export default About;
