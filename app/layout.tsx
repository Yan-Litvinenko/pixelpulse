'use client';

import InstallStateProvider from '@/hoc/InstallStateProvider';
import ModalProvider from '@/hoc/ModalProvider';
import ReduxProvider from '@/hoc/ReduxProvider';
import WrapperProvider from '@/hoc/WrapperProvider';
import '@/styles/index.scss';

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <InstallStateProvider>
                        <ModalProvider>
                            <WrapperProvider>{children}</WrapperProvider>
                        </ModalProvider>
                    </InstallStateProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
