import React from 'react';
import { CreationsAbout } from '../creationsAbout/CreationsAbout';
import { CreationsDetails } from '../creationsDetails/CreationsDetails';
import { CreationsTechnologies } from '../creationsTechnologies/CreationsTechnologies';
import { CreationsXplorer } from '../creationsXplorer/CreationsXplorer';
import { IProject } from '../../interfaces/interface.creations';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import { useTargetProject } from '../../hooks/useTargetProject';
import projects from '../../assets/json/projects.json';
import styles from './Creations.module.scss';

const projectDefault: IProject = {
    about: [
        'The site design is made in the style of a computer game. It describes my achievements and skills, information about my life and goals.',
    ],
    brief: 'reflects growth in educational or professional achievements',
    images: [''],
    link: '',
    name: 'pixelpulse',
    technologies: ['webpack', 'ts', 'react', 'nodeJS', 'mysql'],
};

const Creations = (): React.JSX.Element => {
    const { handleSoundClick } = useAppContext();
    useTargetProject();

    return (
        <main className={styles.creations}>
            <h2 className={styles.creations__title}>creations</h2>

            <div className={styles.creations__inner}>
                <div className={styles.creations__details_block}>
                    <CreationsDetails projectDefault={projectDefault} projects={projects} />
                    <CreationsTechnologies projectDefault={projectDefault} projects={projects} />
                    <CreationsAbout projectDefault={projectDefault} projects={projects} />
                </div>

                <div className={styles.xplorer_block}>
                    <CreationsXplorer projects={projects} />

                    <div className={styles.box_button}>
                        <Link
                            to={'/creations'}
                            className={styles.box_button__back}
                            onClick={handleSoundClick}
                            type="button"
                        >
                            Back to all projects
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export { Creations };
