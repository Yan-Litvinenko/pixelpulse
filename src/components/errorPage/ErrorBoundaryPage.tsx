import React from 'react';
import styles from './ErrorPage.module.scss';
import type { IErrorPage } from '../../interfaces/interface.component';

type Reset = {
    reset: () => void;
};

const ErrorBoundaryPage = (props: IErrorPage & Reset): React.JSX.Element => {
    const { status, detail, reset } = props;
    return (
        <>
            <div className={styles.wrapper_boundary}>
                <div className={styles.container_boundary} data-text={status}>
                    <h1 className={`${styles.title_boundary} ${styles.glitch}`} data-text={status}>
                        {status}
                    </h1>
                    <p className={`${styles.description_boundary} ${styles.glitch}`} data-text={detail}>
                        {detail}
                    </p>

                    <button className={styles.home} onClick={reset}>
                        reset error
                        <span className={`${styles.home__line} ${styles.top_left}`}></span>
                        <span className={`${styles.home__line} ${styles.top_right}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_left}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_right}`}></span>
                        <span className={styles.slick}></span>
                    </button>
                </div>
            </div>
        </>
    );
};

export { ErrorBoundaryPage };
