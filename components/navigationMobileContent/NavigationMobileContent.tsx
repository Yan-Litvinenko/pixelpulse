import React from 'react';
import Link from 'next/link';
import useModal from '@/hooks/useModal';
import styles from '@/styles/components/NavigationMobileContent/NavigationMobileContent.module.scss';
import { Hexagon } from '../svgIcon/SvgIcon';
import { nanoid } from '@reduxjs/toolkit';
import { usePathname } from 'next/navigation';
import type { Page } from '@/interface/interface';

const locations: Record<string, string> = {
    beginning: '/beginning',
    logs: '/logs',
    achievements: '/achievements',
    creations: '/creations',
    games: '/games',
};

export default function NavigationMobileContent(): React.JSX.Element {
    const pathname: string = usePathname();
    const closeNavigationMobile = useModal('navigationMobile').close;

    const handleClick = (isActive: boolean): void => {
        if (!isActive) {
            closeNavigationMobile();
        }
    };

    return (
        <nav className={styles.navigation}>
            {Object.entries(locations).map(([pageName, url]) => {
                const isActive: boolean = pathname.includes(url);

                return (
                    <article className={isActive ? `${styles.item_active} ${styles.item}` : styles.item} key={nanoid()}>
                        <h4 className={styles.item__title}>
                            {pageName as Page}
                            <Hexagon />
                        </h4>
                        <p className={styles.item__text}>Suscipit est consequatur nemo voluptatem est labore saepe.</p>
                        <Link
                            href={url}
                            className={styles.item__link}
                            onClick={() => handleClick(isActive)}
                            scroll={false}
                        />
                    </article>
                );
            })}
        </nav>
    );
}
