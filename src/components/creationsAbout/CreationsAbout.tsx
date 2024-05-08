import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import { ICreationsBlock } from '../../interfaces/interface.credits';
import styles from './CreationsAbout.module.scss';
import { nanoid } from 'nanoid';

const renderAboutText = (texts: string[], className: string): React.JSX.Element[] => {
    return texts.map((text) => <Paragraph className={className} textContent={text} key={nanoid()} />);
};

const CreationsAbout = ({
    projects,
    projectCount,
    projectDefault,
    xplorerState,
}: ICreationsBlock): React.JSX.Element => {
    return (
        <div className={styles.about}>
            <Heading className={styles.about__title} level="3" textContent="About:" />
            <div className={styles.about__text_box}>
                {xplorerState === 'projects'
                    ? renderAboutText(projectDefault.about, styles.about__text)
                    : renderAboutText(projects[projectCount].about, styles.about__text)}
            </div>
        </div>
    );
};

export default CreationsAbout;
