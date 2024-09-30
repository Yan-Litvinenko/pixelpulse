import React from 'react';
import CreationsClient from '@/components/creations/Creations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Creations',
    description: 'My completed projects',
    openGraph: {
        title: 'Creations',
        url: 'https://pixelpulse.by/creations',
    },
    twitter: {
        title: 'Creations',
        description: 'My completed projects',
    },
};

export default function Creations(): React.JSX.Element {
    return (
        <>
            <CreationsClient />
        </>
    );
}
