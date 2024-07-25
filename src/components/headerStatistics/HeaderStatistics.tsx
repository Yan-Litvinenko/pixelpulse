import React, { Suspense } from 'react';
import { IAddCoinResult, IAppDataLoader, ResolveAppLoader, ResolveError } from '../../interfaces/interface.loader';
import { IStatistics } from '../../interfaces/interface.component';
import { HeaderStatisticError } from './HeaderStatisticsError';
import { Await, useFetcher, useLoaderData } from 'react-router-dom';
import { HeaderStatisticsFallback } from './HeaderStatisticFallback';
import { routerHash } from '../../classes/RouterHash';

const HeaderStatistics = (props: IStatistics): React.JSX.Element => {
    const { styles } = props; /* Классы передаются т.к. компонент в 2 местах по разному расположен */
    const load = useLoaderData() as IAppDataLoader;
    const fetcher = useFetcher<IAddCoinResult>();
    const loadData = fetcher.data || load;

    return (
        <div className={styles.statistics}>
            <Suspense fallback={<HeaderStatisticsFallback styles={styles} />}>
                <Await resolve={Promise.all([loadData.level, loadData.coins, loadData.coinAdditionStatus])}>
                    {([resolveLevel, resolveCoins, resolveCoinAdditionStatus]: ResolveAppLoader) => {
                        if (
                            (resolveLevel as ResolveError).status === '404' ||
                            (resolveCoins as ResolveError).status === '404' ||
                            (resolveCoinAdditionStatus as ResolveError).status === '404'
                        ) {
                            return <HeaderStatisticError styles={styles} />;
                        }

                        routerHash.updateHash('level', resolveLevel);
                        routerHash.updateHash('coins', resolveCoins);
                        routerHash.updateHash('addStatus', resolveCoinAdditionStatus);

                        return (
                            <>
                                <div className={styles.level__box}>
                                    <span className={styles.level__text}>{resolveLevel as string}</span>
                                    <span>level</span>
                                </div>
                                <div className={styles.coins}>
                                    <fetcher.Form className={styles.coins__add_box} action="/" method="post">
                                        <button
                                            className={`${styles.coins__btn} ${!(resolveCoinAdditionStatus as boolean) ? styles.coins__btn_pulse : styles.coins__btn_deactive}`}
                                            name="intent"
                                            type="submit"
                                            value={'coin'}
                                        >
                                            +
                                        </button>
                                        {!(resolveCoinAdditionStatus as boolean) ? (
                                            <div className={styles.pulse}></div>
                                        ) : null}
                                    </fetcher.Form>
                                    <div className={styles.coins__text_box}>
                                        <span className={styles.coins__text}>{resolveCoins as string}</span>
                                        <span>coins awarded</span>
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
