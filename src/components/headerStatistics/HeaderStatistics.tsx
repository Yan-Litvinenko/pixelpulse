import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import { IStatistics } from '../../interfaces/interface.component';

const HeaderStatistics = (props: IStatistics): React.JSX.Element => {
    const { className } = props;
    const { level, coins, coinAdditionStatus } = useLoaderData() as {
        level: string;
        coins: string;
        coinAdditionStatus: boolean;
    };

    return (
        <div className={className.statistics}>
            <div className={className.level__box}>
                <Suspense
                    fallback={
                        <>
                            <span className={className.level__text}>loading</span>
                        </>
                    }
                >
                    <Await resolve={level}>
                        <span className={className.level__text}>{level}</span> level
                    </Await>
                </Suspense>
            </div>
            <div className={className.coins}>
                <div className={className.coins__add_box}>
                    <button
                        className={`${className.coins__btn} ${!coinAdditionStatus ? className.coins__btn_pulse : ''}`}
                        type="button"
                    >
                        +
                    </button>

                    {!coinAdditionStatus ? <div className={className.pulse}></div> : null}
                </div>
                <div className={className.coins__text_box}>
                    <span className={className.coins__text}>{coins}</span> coins awarded
                </div>
            </div>
        </div>
    );
};

export default HeaderStatistics;
