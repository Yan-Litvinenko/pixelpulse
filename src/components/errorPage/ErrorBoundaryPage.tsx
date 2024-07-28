import React from 'react';
import { Link } from 'react-router-dom';
import { IErrorPage } from '../../interfaces/interface.component';
import styles from './ErrorPage.module.scss';

const ErrorBoundaryPage = (props: IErrorPage): React.JSX.Element => {
    const { status, detail } = props;
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
                    <Link className={styles.home} to="/beginning">
                        return home
                        <span className={`${styles.home__line} ${styles.top_left}`}></span>
                        <span className={`${styles.home__line} ${styles.top_right}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_left}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_right}`}></span>
                        <span className={styles.slick}></span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export { ErrorBoundaryPage };
