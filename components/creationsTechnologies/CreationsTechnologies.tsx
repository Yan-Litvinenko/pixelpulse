import React from 'react';
import styles from '@/styles/components/creationsTechnologies/CreationsTechnologies.module.scss';
import CreationsTechnologiesContent from '../creationsTechnologiesContent/CreationsTechnologiesContent';
import { Hexagon } from '../svgIcon/SvgIcon';

export default function CreationsTechnologies(): React.JSX.Element {
    return (
        <section className={styles.technologies}>
            <h3 className={styles.technologies__title}>
                technologies
                <Hexagon />
            </h3>
            <div>
                <CreationsTechnologiesContent />
            </div>
        </section>
    );
}
