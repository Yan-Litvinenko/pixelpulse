import React from 'react';
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import { useDispatch } from 'react-redux';
import type { IErrorPage } from '../../interfaces/interface.component';
import type { AppDispatch } from '../../store/store';

const ErrorPage = (props: IErrorPage): React.JSX.Element => {
    const { status, detail } = props;
    const dispatch = useDispatch<AppDispatch>();
    const toTheHome = () => dispatch(soundsClickTrigger());

    return (
        <>
            <div className={styles.wrapper}>
                <section className={styles.container} data-text={status}>
                    <h2 className={`${styles.title} ${styles.glitch}`} data-text={status}>
                        {status}
                    </h2>
                    <p className={`${styles.description} ${styles.glitch}`} data-text={detail}>
                        {detail}
                    </p>
                    <Link className={styles.home} to="/beginning" onClick={toTheHome}>
                        return home
                        <span className={`${styles.home__line} ${styles.top_left}`}></span>
                        <span className={`${styles.home__line} ${styles.top_right}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_left}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_right}`}></span>
                        <span className={styles.slick}></span>
                    </Link>
                </section>
            </div>
        </>
    );
};

export { ErrorPage };
