'use client';

import React from 'react';
import useModal from '@/hooks/useModal';
import { Hexagon, Bluetooth } from '../svgIcon/SvgIcon';
import type { HeroContactsProps } from '@/interface/asideHero/AsideHero.interface';

export default function HeroContacts(props: HeroContactsProps) {
    const { text, image, className, modal, title } = props;
    const openModal = useModal(modal || 'availability').open;

    return (
        <article className={className.element}>
            <h3 className={className.title}>{title}</h3>
            <button className={className.button} type="button" onClick={openModal}>
                {text}
                {image === 'hexagon' ? <Hexagon /> : <Bluetooth />}
            </button>
        </article>
    );
}
