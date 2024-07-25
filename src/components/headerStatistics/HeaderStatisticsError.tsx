import React from 'react';
import { IStatistics } from '../../interfaces/interface.component';

const HeaderStatisticError = (props: IStatistics) => {
    const { styles } = props;

    return (
        <>
            <div className={styles.level__box}>
                <span className={styles.level__text}>Error</span>
                <span>level</span>
            </div>
            <div className={styles.coins}>
                <div className={styles.coins__add_box}>
                    <button type="button" className={`${styles.coins__btn} ${styles.coins__btn_deactive}`}>
                        +
                    </button>
                </div>
                <div className={styles.coins__text_box}>
                    <span className={styles.coins__text}>Error</span>
                    <span>coins awarded</span>
                </div>
            </div>
        </>
    );
};

export { HeaderStatisticError };
