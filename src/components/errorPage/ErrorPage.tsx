import React from 'react';
import styles from './ErrorPage.module.scss';

const ErrorPage = (): React.JSX.Element => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container} data-text="404">
                    <h1 className={`${styles.title} ${styles.glitch}`} data-text="404">
                        404
                    </h1>
                    <p className={`${styles.description} ${styles.glitch}`} data-text="PAGE NOT FOUND">
                        PAGE NOT FOUND
                    </p>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
