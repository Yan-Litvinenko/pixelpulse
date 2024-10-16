import React from 'react';
import WelcomeContent from '@/components/welcomeContent.tsx/WelcomeContent';
import type { AnimatedText } from '@/interface/welcome/Welcome.interface';
import type { Metadata, Viewport } from 'next';

const animatedText: AnimatedText = {
    title: 'Welcome to by personal website',
    text_1: 'I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this.',
    text_2: 'You will find "achievements" or "quests" that show the progress in my professional life and are related to what I am working on.',
};

export const metadata: Metadata = {
    title: 'Welcome',
    description: `${animatedText.text_1} ${animatedText.text_2}`,
    keywords: [
        'Ян Литвиненко',
        'achievements',
        'frontend developer',
        'game',
        'IT',
        'professional life',
        'quests',
        'sci-fi',
        'UI',
        'website',
        'Yan Litvinenko',
    ],
    openGraph: {
        title: 'Welcome',
        description: `${animatedText.text_1} ${animatedText.text_2}`,
        siteName: 'pixelpulse',
        url: 'https://pixelpulse.by',
        images: [
            {
                url: 'https://pixelpulse.by/preview.jpg',
                width: 2912,
                height: 1632,
                alt: 'Swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Welcome',
        description: `${animatedText.text_1} ${animatedText.text_2}`,
        images: ['https://pixelpulse.by/preview.jpg'],
    },
    icons: {
        icon: [
            { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { rel: 'icon', url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
        ],
        apple: [{ rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' }],
        other: [
            { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
    width: 'device-width',
    maximumScale: 1,
    themeColor: '#000000',
};

export default function Home(): React.JSX.Element {
    return (
        <main className={'welcome'} id="welcome">
            <h2 className={'welcome__greeting'}>HI!</h2>
            <WelcomeContent {...animatedText} />
        </main>
    );
}
