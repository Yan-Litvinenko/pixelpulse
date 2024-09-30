import React from 'react';
import GameSnakeClient from '@/components/gameSnakeClient/GameSnakeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Games: Snake',
    description: 'Classic snake game',
    openGraph: {
        title: 'Games: Snake',
        url: 'https://pixelpulse.by/games/snake',
    },
    twitter: {
        title: 'Games: Snake',
        description: 'Classic snake game',
    },
};

export default function Game(): React.JSX.Element {
    return (
        <>
            <GameSnakeClient />
        </>
    );
}
