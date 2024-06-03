import React from 'react';
import AboutElement from '../aboutElement/AboutElement';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { nanoid } from 'nanoid';
import GlitchCanvas from '../glitchImage/GlitchImage';
import humanJpg from '../../assets/images/human.jpg';
import styles from './About.module.scss';

const content: Record<string, string>[] = [
    {
        title: 'The short introduction of my life',
        text: 'For the past one and a half years, I have been diving into the world of front-end development. My journey began with JavaScript and quickly expanded to include React and TypeScript. I have always been passionate about creating smooth and interactive user experiences.',
    },
    {
        title: 'Career and development',
        text: 'During my learning journey, I have also dabbled a bit in back-end technologies, gaining some experience with Node.js and MySQL. While I enjoy front-end development, I am eager to deepen my knowledge of back-end development, particularly with Node.js and databases like MySQL and MongoDB. I believe that understanding the full stack will make me a more versatile and effective developer.',
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
                        <GlitchCanvas
                            className={styles.about__img}
                            imageUrl={humanJpg}
                            minDelay={7000}
                            maxDelay={15000}
                        />
                    </div>
                )}
            </div>
        </main>
    );
};

export default About;
