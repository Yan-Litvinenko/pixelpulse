import React from 'react';
import { CreationsAbout } from '../creationsAbout/CreationsAbout';
import { CreationsDetails } from '../creationsDetails/CreationsDetails';
import { CreationsTechnologies } from '../creationsTechnologies/CreationsTechnologies';
import { CreationsXplorer } from '../creationsXplorer/CreationsXplorer';
import { IProject, XplorerLocation } from '../../interfaces/interface.creations';
import { useAppContext } from '../../hooks/useAppContext';
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
    const [xplorerLocation, setXplorerLocation] = React.useState<XplorerLocation>('projects');

    return (
        <main className={styles.creations}>
            <h2 className={styles.creations__title}>creations</h2>

            <div className={styles.creations__inner}>
                <div className={styles.creations__details_block}>
                    <CreationsDetails
                        projectDefault={projectDefault}
                        projects={projects}
                        xplorerLocation={xplorerLocation}
                    />
                    <CreationsTechnologies
                        projectDefault={projectDefault}
                        projects={projects}
                        xplorerLocation={xplorerLocation}
                    />
                    <CreationsAbout
                        projectDefault={projectDefault}
                        projects={projects}
                        xplorerLocation={xplorerLocation}
                    />
                </div>

                <div className={styles.xplorer_block}>
                    <CreationsXplorer
                        projects={projects}
                        xplorerLocation={xplorerLocation}
                        setXplorerLocation={setXplorerLocation}
                    />

                    <div className={styles.box_button}>
                        <button
                            className={styles.box_button__back}
                            onClick={() => {
                                setXplorerLocation('projects');
                                handleSoundClick();
                            }}
                            type="button"
                        >
                            Back to all projects
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export { Creations };
