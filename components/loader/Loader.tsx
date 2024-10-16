'use client';

import React from 'react';
import styles from '@/styles/components/loading/Loading.module.scss';
import { Triangle } from 'react-loader-spinner';

export default function Loader(): React.JSX.Element {
    return (
        <div className={styles.loading}>
            <Triangle
                ariaLabel="triangle-loading"
                color=""
                height="100"
                visible={true}
                width="100"
                wrapperClass={'loader'}
                wrapperStyle={{}}
            />
        </div>
    );
}
