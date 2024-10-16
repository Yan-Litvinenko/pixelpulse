'use client';

import React from 'react';
import useClient from '@/hooks/useClient';

export default function AchievementsProgressRing({ percent }: { percent: number }): React.JSX.Element {
    const isClient = useClient();
    const square: number = 148;
    const border: number = 14;
    const CYX: number = square / 2;
    const radius: number = square / 2 - border * 2;
    const circumference: number = 2 * Math.PI * radius;

    return isClient ? (
        <svg
            className={'progress_ring'}
            width={`${square}rem`}
            height={`${square}rem`}
            viewBox={`0 0 ${square} ${square}`}
            data-testid="svg"
        >
            <circle
                style={{
                    strokeDashoffset: `${circumference - (percent / 100) * circumference}`,
                    strokeDasharray: `${circumference} ${circumference}`,
                }}
                className={'progress_ring__circle'}
                stroke="current-color"
                strokeWidth={border}
                cy={CYX}
                cx={CYX}
                r={radius}
                fill="transparent"
                data-testid="circle"
            />
        </svg>
    ) : (
        <></>
    );
}
