'use client';

import React from 'react';
import useWrapperClassName from '@/hooks/useWrapperClassName';

export default function WrapperProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const wrapperClassName = useWrapperClassName();

    return <div className={wrapperClassName}>{children}</div>;
}
