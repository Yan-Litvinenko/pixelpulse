import React from 'react';
import { ICreationsBlock } from '../../interfaces/interface.creations';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../hooks/useAppContext';
import { useParams } from 'react-router-dom';
import styles from './CreationsAbout.module.scss';

const CreationsAbout = (props: ICreationsBlock): React.JSX.Element => {
    const { targetProject } = useAppContext();
    const { projectName } = useParams();
    const { projectDefault, projects } = props;

    const texts: string[] = !projectName ? projectDefault.about : projects[targetProject].about || [];

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

export { CreationsAbout };
