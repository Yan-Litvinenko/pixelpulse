import React from 'react';
import HeroAvatar from '../heroAvatar/HeroAvatar';
import HeroContacts from '../heroContacts/HeroContacts';

export default function AsideHero(): React.JSX.Element {
    return (
        <aside className={'hero'}>
            <HeroAvatar className={{ avatar: 'avatar', canvas: 'canvas', link: 'avatar__link' }} />
            <article className={'hero__element'}>
                <h4 className={'hero__title'}>Name</h4>
                <h3 className={'hero__text'}>Yan Litvinenko</h3>
            </article>

            <article className={'hero__element'}>
                <h4 className={'hero__title'}>Occupation</h4>
                <h3 className={'hero__text'}>Frontend developer</h3>
            </article>

            <article className={'hero__element'}>
                <h4 className={'hero__title'}>Corporation</h4>
                <h3 className={'hero__text'}>Student</h3>
            </article>

            <HeroContacts
                title="availability"
                text="open for hire"
                image="hexagon"
                modal="availability"
                className={{
                    element: 'hero__element',
                    title: 'hero__title',
                    button: 'hero__availability',
                }}
            />
            <HeroContacts
                title="social"
                text="open connection"
                image="bluetooth"
                modal="social"
                className={{
                    element: 'hero__element',
                    title: 'hero__title',
                    button: 'hero__social',
                }}
            />

            <article className={'motto'}>
                <h4 className={'motto__title'}>motto:</h4>
                <h3 className={'motto__text'}>Bonum modulum est, quod connecti potest.</h3>
            </article>
        </aside>
    );
}
