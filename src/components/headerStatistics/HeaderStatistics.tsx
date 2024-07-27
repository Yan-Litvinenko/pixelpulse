import React from 'react';
import { IStatistics } from '../../interfaces/interface.component';
import { useAppContext } from '../../hooks/useAppContext';
import { HeaderStatisticsFallback } from './HeaderStatisticFallback';

const HeaderStatistics = (props: IStatistics): React.JSX.Element => {
    const { styles } = props;
    const { headerStatistic } = useAppContext();
    const { level, coins, addStatus, isLoad, isError, addCoin } = headerStatistic;

    return (
        <div className={styles.statistics}>
            {isLoad ? (
                <HeaderStatisticsFallback styles={styles} />
            ) : (
                <>
                    <div className={styles.level__box}>
                        {isError ? (
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
                                onClick={addCoin}
                            >
                                +
                            </button>
                            {!isError ? !addStatus ? <div className={styles.pulse}></div> : null : null}
                        </form>
                    </div>
                    <div className={styles.coins__text_box}>
                        {isError ? (
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

{
}
