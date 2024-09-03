import React from 'react';
import styles from './ErrorPage.module.scss';
import { useDispatch } from 'react-redux';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import type { IErrorPage } from '../../interfaces/interface.component';
import type { AppDispatch } from '../../store/store';

const ErrorBoundaryPage = (props: IErrorPage & { reset: () => void }): React.JSX.Element => {
    const { status, detail, reset } = props;
    const dispatch = useDispatch<AppDispatch>();
    const resetClick = (): void => {
        dispatch(soundsClickTrigger());
        reset();
    };

    return (
        <>
            <div className={styles.wrapper_boundary}>
                <section className={styles.container_boundary} data-text={status}>
                    <h2 className={`${styles.title_boundary} ${styles.glitch}`} data-text={status}>
                        {status}
                    </h2>

                    <p className={`${styles.description_boundary} ${styles.glitch}`} data-text={detail}>
                        {detail}
                    </p>

                    <button className={styles.home} onClick={resetClick}>
                        reset error
                        <span className={`${styles.home__line} ${styles.top_left}`}></span>
                        <span className={`${styles.home__line} ${styles.top_right}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_left}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_right}`}></span>
                        <span className={styles.slick}></span>
                    </button>
                </section>
            </div>
        </>
    );
};

export { ErrorBoundaryPage };
