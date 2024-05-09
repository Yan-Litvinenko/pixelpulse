import React from 'react';
import Button from '../button/Button';
import CreationsAbout from '../creationsAbout/CreationsAbout';
import CreationsDetails from '../creationsDetails/CreationsDetails';
import CreationsTechnologies from '../creationsTechnologies/CreationsTechnologies';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import Xplorer from '../creationsXplorer/CreationsXplorer';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import projects from '../../assets/json/projects.json';
import styles from './Creations.module.scss';

const projectDefault: IProject = {
    about: ['default about'],
    brief: 'CV brief',
    images: [''],
    name: 'CV',
    technologies: ['react', 'js', 'nodeJS', 'github', 'figma'],
};

const Creations = (): React.JSX.Element => {
    const [projectCount, setProjectCount] = React.useState<number>(0);
    const [xplorerState, setXplorerState] = React.useState<XplorerState>('projects');

    return (
        <main className={styles.creations}>
            <Heading className={styles.creations__title} level="2" textContent="creations" />

            <div className={styles.creations__inner}>
                <div className={styles.creations__details_block}>
                    <CreationsDetails
                        projectCount={projectCount}
                        projectDefault={projectDefault}
                        projects={projects}
                        xplorerState={xplorerState}
                    />
                    <CreationsTechnologies
                        projectCount={projectCount}
                        projectDefault={projectDefault}
                        projects={projects}
                        xplorerState={xplorerState}
                    />
                    <CreationsAbout
                        projectCount={projectCount}
                        projectDefault={projectDefault}
                        projects={projects}
                        xplorerState={xplorerState}
                    />
                </div>

                <div className={styles.xplorer_block}>
                    <Xplorer
                        projectCount={projectCount}
                        projects={projects}
                        setProjectCount={setProjectCount}
                        setXplorerState={setXplorerState}
                        xplorerState={xplorerState}
                    />
                    <div className={styles.box_button}>
                        <Button
                            className={styles.box_button__back}
                            textContent="Back to all projects"
                            onClick={() => setXplorerState('projects')}
                        />
                    </div>
                </div>
            </div>

            <Frame />
        </main>
    );
};

export default Creations;
