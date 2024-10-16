'use client';

import React from 'react';
import getAddCoinStatus from '@/helpers/header/getAddCoinStatus';
import useClient from '@/hooks/useClient';
import setValueToLocalStorage from '@/helpers/setValueToLocalStorage';
import { fetchAddCoin } from '@/redux/slice/headerStatisticSlice';
import { Triangle } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { headerStatisticSelector } from '@/redux/selectors';
import type { AppDispatch } from '@/redux/store';

export default function HeaderStatistics(): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const { error, loading, statistic } = useSelector(headerStatisticSelector);
    const { level, coins } = statistic;
    const [addStatus, setAddStatus] = React.useState<boolean>(false);
    const isClient = useClient();

    React.useEffect(() => {
        setAddStatus(getAddCoinStatus());
    }, [level, coins]);

    const handleAddCoins = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (addStatus) {
            setAddStatus(false);
            setValueToLocalStorage(process.env.NEXT_PUBLIC_API_ADD_COINS_STATUS!, new Date().getTime());
            dispatch(fetchAddCoin(event));
        }
    };

    const renderLoader = (): React.JSX.Element => (
        <Triangle ariaLabel="triangle-loading" color="" height="32" visible={true} width="32" wrapperClass={'loader'} />
    );

    const renderLevel = (): React.JSX.Element => {
        return loading ? renderLoader() : <span className={'level__text'}>{!error ? statistic.level : 'error'}</span>;
    };

    const renderCoins = (): React.JSX.Element => {
        return loading ? renderLoader() : <span className={'coins__text'}>{!error ? statistic.coins : 'error'}</span>;
    };

    return (
        <div className={'statistics'}>
            <div className={'level'}>
                {isClient ? renderLevel() : null}
                <span>level</span>
            </div>
            <div className={'coins'}>
                <form className={'coins__add_box'}>
                    <button
                        className={`${'coins__btn'} ${addStatus ? 'coins__btn_pulse' : 'coins__btn_deactive'}`}
                        type="button"
                        onClick={handleAddCoins}
                    >
                        +
                    </button>
                    {addStatus && <div className={'pulse'}></div>}
                </form>
            </div>
            <div className={'coins__text_box'}>
                {isClient ? renderCoins() : null}
                <span>coins awarded</span>
            </div>
        </div>
    );
}
