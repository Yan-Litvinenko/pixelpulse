import React from 'react';
import Button from '../button/Button';
import CreationsAbout from '../creationsAbout/CreationsAbout';
import CreationsDetails from '../creationsDetails/CreationsDetails';
import CreationsTechnologies from '../creationsTechnologies/CreationsTechnologies';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import Xplorer from '../creationsXplorer/CreationsXplorer';
import { Triangle } from 'react-loader-spinner';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import projects from '../../assets/json/projects.json';
import styles from './Creations.module.scss';

const projectDefault: IProject = {
    about: ['default about'],
    brief: 'CV brief',
    images: [''],
    link: '',
    name: 'CV',
    technologies: ['react', 'js', 'nodeJS', 'github', 'figma'],
};

const Creations = (): React.JSX.Element => {
    const [load, setLoad] = React.useState<boolean>(true);
    const [projectCount, setProjectCount] = React.useState<number>(0);
    const [xplorerState, setXplorerState] = React.useState<XplorerState>('projects');

    React.useEffect(() => setLoad(false), []);

    return (
        <main className={styles.creations}>
            <Frame className={styles.frame} />

            {load ? (
                <Triangle
                    visible={true}
                    height="80"
                    width="80"
                    color="rgb(232, 74, 74)"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass={styles.loader}
                />
            ) : (
                <>
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
                                    delayEvent={false}
                                    handleButton={() => setXplorerState('projects')}
                                    textContent="Back to all projects"
                                    type="button"
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};

export default Creations;
