import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { nanoid } from 'nanoid';
import { ICreationsBlock } from '../../interfaces/interface.credits';
import styles from './CreationsAbout.module.scss';

const renderAboutText = (texts: string[], className: string): React.JSX.Element[] => {
    return texts.map((text) => <Paragraph className={className} textContent={text} key={nanoid()} />);
};

const CreationsAbout = ({ projects, projectDefault, xplorerState }: ICreationsBlock): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    return (
        <div className={styles.about}>
            <Heading className={styles.about__title} level="3" textContent="About:" />
            <div className={styles.about__text_box}>
                {xplorerState === 'projects'
                    ? renderAboutText(projectDefault.about, styles.about__text)
                    : renderAboutText(projects[contextApp.modalProject].about, styles.about__text)}
            </div>
        </div>
    );
};

export default CreationsAbout;
