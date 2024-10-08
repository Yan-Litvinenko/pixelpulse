'use client';

import InstallStateProvider from '@/hoc/InstallStateProvider';
import StyledJsxRegistry from './registry';
import ModalProvider from '@/hoc/ModalProvider';
import ReduxProvider from '@/hoc/ReduxProvider';
import WrapperProvider from '@/hoc/WrapperProvider';
import '@/styles/index.scss';

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Yan Litvinenko',
                            jobTitle: 'Frontend Developer',
                            url: 'https://pixelpulse.by',
                            sameAs: ['https://github.com/Yan-Litvinenko'],
                            knowsAbout: [
                                'Figma',
                                'GIT',
                                'Github',
                                'Webpack',
                                'Gulp',
                                'Eslint',
                                'Prettier',
                                'Husky',
                                'HTML',
                                'CSS',
                                'SCSS',
                                'LESS',
                                'Wordpress',
                                'JavaScript',
                                'TypeScript',
                                'React',
                                'Redux',
                                'React-router',
                                'React-hook-form',
                                'Next.js',
                                'Node.js',
                                'MongoDB',
                                'MySQL',
                                'Frontend Development',
                                'Responsive Design',
                                'Cyberpunk Interface Design',
                            ],
                            workLocation: {
                                '@type': 'Place',
                                name: 'Minsk',
                                address: {
                                    '@type': 'PostalAddress',
                                    addressLocality: 'Minsk',
                                    addressCountry: 'Belarus',
                                },
                            },
                            worksFor: {
                                '@type': 'Organization',
                                name: 'pixelpulse',
                                url: 'https://pixelpulse.by',
                            },
                            hasOccupation: {
                                '@type': 'Occupation',
                                name: 'Frontend Developer',
                                skills: [
                                    'GIT',
                                    'Github',
                                    'Figma',
                                    'Prettier',
                                    'Eslint',
                                    'Husky',
                                    'HTML',
                                    'CSS',
                                    'SCSS',
                                    'SASS',
                                    'LESS',
                                    'JavaScript',
                                    'TypeScript',
                                    'React',
                                    'Redux',
                                    'React-router',
                                    'React-hook-form',
                                    'Next.js',
                                    'Node.js',
                                    'MongoDB',
                                    'MySQL',
                                ],
                                responsibilities: [
                                    'Developing and maintaining web applications',
                                    'Creating interactive user interfaces',
                                    'Optimizing frontend performance',
                                ],
                            },
                            contactPoint: {
                                '@type': 'ContactPoint',
                                contactType: 'Personal',
                                email: 'mailto:yan.litvinenko.dev@gmail.com',
                            },
                        }),
                    }}
                />
            </head>
            <body>
                <ReduxProvider>
                    <InstallStateProvider>
                        <ModalProvider>
                            <WrapperProvider>
                                <StyledJsxRegistry>{children}</StyledJsxRegistry>
                            </WrapperProvider>
                        </ModalProvider>
                    </InstallStateProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
