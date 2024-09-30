import React from 'react';
import CreationsProject from '@/components/creationsProject/CreationsProject';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { project: string } }): Promise<Metadata> {
    const projectName: string = params.project;

    return {
        title: `Project: ${projectName[0].toUpperCase() + projectName.slice(1)}`,
        description: `Details about project ${projectName}`,
        openGraph: {
            title: `Project: ${projectName}`,
            url: `https://pixelpulse.by/creations/${projectName}`,
        },
        twitter: {
            title: `Project: ${projectName}`,
            description: `Details about project ${projectName}`,
        },
    };
}

export default function Project(): React.JSX.Element {
    return (
        <>
            <CreationsProject />
        </>
    );
}
