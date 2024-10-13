'use client';

import React from 'react';
import GlitchImage from '../glitchImage/GlitchImage';
import Avatar from '@/public/assets/images/avatar.png';
import Frame from '../frame/Frame';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mediaQuerySelector } from '@/redux/selectors';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { HeroAvatarProps } from '@/interface/asideHero/AsideHero.interface';
import type { AppDispatch } from '@/redux/store';

export default function HeroAvatar(props: HeroAvatarProps): React.JSX.Element | null {
    const dispatch = useDispatch<AppDispatch>();
    const { isSmall } = useSelector(mediaQuerySelector);
    const { link, avatar, canvas } = props.className;
    const path = usePathname();

    const handleClick = (): void => {
        if (path !== '/about') {
            dispatch(soundsClickTrigger());
        }
    };

    return isSmall ? null : (
        <article className={avatar}>
            <Link href="/about" className={link} onClick={handleClick} />
            <Frame className="null" />
            <GlitchImage className={canvas} imageUrl={Avatar.src} minDelay={20000} maxDelay={40000} />
        </article>
    );
}
