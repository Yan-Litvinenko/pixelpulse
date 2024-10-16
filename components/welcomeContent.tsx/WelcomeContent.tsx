'use client';

import React from 'react';
import Link from 'next/link';
import skipAnimation from '@/helpers/welcome/skipAnimation';
import textWithPipeAnimated from '@/helpers/welcome/textElementWithAnimation';
import useWelcome from '@/hooks/useWelcome';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch } from 'react-redux';
import type { AnimatedText } from '@/interface/welcome/Welcome.interface';

export default function WelcomeContent(props: AnimatedText): React.JSX.Element {
    const dispatch = useDispatch();
    const { skipPressed, title, textOne, textTwo, skipButton, setSkipPressed } = useWelcome(props);

    return (
        <section className={'welcome__content'}>
            <div className={'welcome__item'}>
                <div className={'welcome__title hidden'}>{props.title}</div>
                <h1 className={'welcome__title'}>
                    {skipPressed ? props.title : textWithPipeAnimated(title.animationText, !title.animationEnd)}
                </h1>
            </div>

            <div className={'welcome__item'}>
                <div className={'welcome__text hidden'}>{props.text_1}</div>
                <p className={'welcome__text'}>
                    {skipPressed
                        ? props.text_1
                        : textWithPipeAnimated(textOne.animationText, !textOne.animationEnd && title.animationEnd)}
                </p>
            </div>

            <div className={'welcome__item'}>
                <div className={'welcome__text hidden'}>{props.text_2}</div>
                <p className={'welcome__text'}>
                    {skipPressed
                        ? props.text_2
                        : textWithPipeAnimated(textTwo.animationText, !textTwo.animationEnd && textOne.animationEnd)}
                </p>
            </div>
            <Link
                className={`welcome__btn ${skipPressed || textTwo.animationEnd ? '' : 'hidden'}`}
                onClick={() => dispatch(soundsClickTrigger())}
                href="/beginning"
            >
                Enter the system
            </Link>

            <button
                className={`skip ${skipPressed || textOne.animationEnd ? 'hidden' : ''}`}
                onClick={() => {
                    dispatch(soundsClickTrigger());
                    skipAnimation({ title, textOne, textTwo });
                    setSkipPressed(true);
                }}
                ref={skipButton}
            >
                skip animation
                <span className={'skip__quotes'}>&#xBB;</span>
            </button>
        </section>
    );
}
