'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import type { AppDispatch } from '@/redux/store';
import type { GamesElementProps } from '@/interface/games/games.interface';

export default function GamesElement(props: GamesElementProps): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const { link, name, description, imageSrc, isActive } = props;

    return (
        <article className={`game_element ${!isActive ? 'game_element_deactive' : ''}`}>
            {isActive ? (
                <Link className={'game_element__link'} href={link} onClick={() => dispatch(soundsClickTrigger())} />
            ) : null}

            <figure className={'game_element__content'}>
                <Image
                    alt={`${name}. ${description}`}
                    className={'game_element__image'}
                    draggable={false}
                    src={imageSrc}
                    width={226}
                    height={146}
                />
                <figcaption className={'game_element__description'}>
                    <h2 className={'game_element__title'}>{name}</h2>
                    <p className={'game_element__text'}>{description}</p>
                </figcaption>
            </figure>
        </article>
    );
}
