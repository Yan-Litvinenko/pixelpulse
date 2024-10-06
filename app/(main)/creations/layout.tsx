'use client';

import React from 'react';
import styles from '@/styles/components/creationsLayout/CreationsLayout.module.scss';
import CreationsAbout from '@/components/creationsAbout/CreationsAbout';
import CreationsDetails from '@/components/creationsDetails/CreationsDetails';
import CreationsTechnologies from '@/components/creationsTechnologies/CreationsTechnologies';
import Frame from '@/components/frame/Frame';
import isOriginPath from '@/helpers/creations/getOriginPath';
import Link from 'next/link';
import Loading from '@/app/loading';
import { creationsSelector } from '@/redux/selectors';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

export default function CreationsLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const { targetProject, projects } = useSelector(creationsSelector);
    const [isLoad, setIsLoad] = React.useState(true);
    const projectName: string = usePathname();
    const path: string = `location: /projects${!isOriginPath(projectName) ? '/' + projects[targetProject].name : ''}`;

    const mockLoading = () => new Promise((resolve) => setTimeout(() => resolve(setIsLoad(false)), 150));

    React.useEffect(() => {
        mockLoading();
    }, []);

    if (isLoad) {
        return <Loading />;
    }

    return (
        <section className={styles.creations}>
            <h2 className={styles.creations__title}>creations</h2>

            <div className={styles.creations__inner}>
                <div className={styles.creations__details_block}>
                    <CreationsDetails />
                    <CreationsTechnologies />
                    <CreationsAbout />
                </div>

                <div className={styles.xplorer_block}>
                    <section className={styles.xplorer}>
                        <h3 className={styles.xplorer__title}>file xplorer</h3>
                        <h4 className={styles.xplorer__path}>{path}</h4>

                        {children}
                        <Frame className="" />
                    </section>

                    <div className={styles.box_button}>
                        <Link
                            href={'/creations'}
                            className={styles.box_button__back}
                            onClick={() => dispatch(soundsClickTrigger())}
                            type="button"
                        >
                            Back to all projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
