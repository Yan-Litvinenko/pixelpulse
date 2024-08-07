import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderStatisticsFallback } from './HeaderStatisticFallback';
import { useDispatch } from 'react-redux';
import { fetchAddCoin } from '../../store/headerStatisticSlice';
import type { IStatistics } from '../../interfaces/interface.component';
import type { AppDispatch, RootState } from '../../store/store';

const HeaderStatistics = (props: IStatistics): React.JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const { headerStatistic } = useSelector((state: RootState) => state);
    const { error, loading, statistic } = headerStatistic;
    const { level, coins, addStatus } = statistic;
    const { styles } = props;

    return (
        <div className={styles.statistics}>
            {loading ? (
                <HeaderStatisticsFallback styles={styles} />
            ) : (
                <>
                    <div className={styles.level__box}>
                        {error ? (
                            <span className={styles.level__text}>Error</span>
                        ) : (
                            <span className={styles.level__text}>{level}</span>
                        )}
                        <span>level</span>
                    </div>
                    <div className={styles.coins}>
                        <form className={styles.coins__add_box}>
                            <button
                                className={`${styles.coins__btn} ${!addStatus ? styles.coins__btn_pulse : styles.coins__btn_deactive}`}
                                type="button"
                                onClick={(event) => (error || addStatus ? null : dispatch(fetchAddCoin(event)))}
                            >
                                +
                            </button>
                            {!error ? !addStatus ? <div className={styles.pulse}></div> : null : null}
                        </form>
                    </div>
                    <div className={styles.coins__text_box}>
                        {error ? (
                            <span className={styles.coins__text}>Error</span>
                        ) : (
                            <span className={styles.coins__text}>{coins}</span>
                        )}

                        <span>coins awarded</span>
                    </div>
                </>
            )}
        </div>
    );
};

export { HeaderStatistics };
