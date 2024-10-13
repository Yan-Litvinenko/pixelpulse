'use client';

import React from 'react';
import styles from '@/styles/components/logsLink/LogsLink.module.scss';
import { soundsClickTrigger } from '@/redux/slice/soundsSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

export default function LogsLink(): React.JSX.Element {
    const dispatch: AppDispatch = useDispatch();

    return (
        <a
            className={styles.logs__github}
            href="https://github.com/Yan-Litvinenko"
            onClick={() => dispatch(soundsClickTrigger())}
            target="_blank"
        >
            github.com
        </a>
    );
}
