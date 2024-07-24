import React, { Suspense } from 'react';
import { IAppDataLoader, ResolveAppLoader, ResolveError } from '../../interfaces/interface.loader';
import { IStatistics } from '../../interfaces/interface.component';
import { Triangle } from 'react-loader-spinner';
import { useMatches, Await } from 'react-router-dom';

const HeaderStatistics = (props: IStatistics): React.JSX.Element => {
    const { styles } = props; /* Классы передаются т.к. компонент в 2 местах по разному расположен */
    const matches = useMatches();
    const appDataLoader = matches.find((match) => match.id === 'app')?.data as IAppDataLoader;
    const { level, coins, coinAdditionStatus } = appDataLoader;

    return (
        <div className={styles.statistics}>
            <Suspense
                fallback={
                    <>
                        loading statistics
                        <Triangle
                            ariaLabel="triangle-loading"
                            color=""
                            height="32"
                            visible={true}
                            width="32"
                            wrapperClass={styles.loader}
                            wrapperStyle={{}}
                        />
                    </>
                }
            >
                <Await resolve={Promise.all([level, coins, coinAdditionStatus])}>
                    {([resolveLevel, resolveCoins, resolveCoinAdditionStatus]: ResolveAppLoader) => {
                        if (
                            (resolveLevel as ResolveError).status === '404' ||
                            (resolveCoins as ResolveError).status === '404' ||
                            (resolveCoinAdditionStatus as ResolveError).status === '404'
                        ) {
                            return <span className={styles.error}>Error loading statistics</span>;
                        }

                        return (
                            <>
                                <div className={styles.level__box}>
                                    <span className={styles.level__text}>{resolveLevel as string}</span> level
                                </div>
                                <div className={styles.coins}>
                                    <div className={styles.coins__add_box}>
                                        <button
                                            type="button"
                                            className={`${styles.coins__btn} ${!(resolveCoinAdditionStatus as boolean) ? styles.coins__btn_pulse : ''}`}
                                        >
                                            +
                                        </button>
                                        {!(resolveCoinAdditionStatus as boolean) ? (
                                            <div className={styles.pulse}></div>
                                        ) : null}
                                    </div>
                                    <div className={styles.coins__text_box}>
                                        <span className={styles.coins__text}>{resolveCoins as string}</span> coins
                                        awarded
                                    </div>
                                </div>
                            </>
                        );
                    }}
                </Await>
            </Suspense>
        </div>
    );
};

export { HeaderStatistics };
