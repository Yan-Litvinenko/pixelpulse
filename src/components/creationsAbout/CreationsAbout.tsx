import React from 'react';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import { nanoid } from 'nanoid';
import { ICreationsBlock } from '../../interfaces/interface.creations';
import styles from './CreationsAbout.module.scss';

const CreationsAbout = (props: ICreationsBlock): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { modalProject } = contextApp;
    const { projectDefaultData, projects, xplorerState } = props;

    const texts: string[] =
        xplorerState === 'projects' ? projectDefaultData.about : projects[modalProject]?.about || [];

    return (
        <div className={styles.about}>
            <h3 className={styles.about__title}>About:</h3>

            <div className={styles.about__text_box}>
                {texts.map((text) => (
                    <p key={nanoid()} className={styles.about__text}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CreationsAbout;
