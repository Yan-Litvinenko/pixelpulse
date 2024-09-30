'use client';

import React from 'react';
import useAchievements from '@/hooks/useAchievements';
import useApp from '@/hooks/useApp';
import useHeaderStatistic from '@/hooks/useHeaderStatistic';
import useMedia from '@/hooks/useMedia';
import useModalCloseByKey from '@/hooks/useModalCloseByKey';
import useMusic from '@/hooks/useMusic';
import useSounds from '@/hooks/useSounds';
import appStyles from '@/styles/components/app/App.module.scss';

export default function InstallStateProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    useAchievements();
    useApp(appStyles);
    useHeaderStatistic();
    useMedia();
    useModalCloseByKey();
    useMusic();
    useSounds();

    return <>{children}</>;
}
