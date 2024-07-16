import React from 'react';
import Button from '../button/Button';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { IStatistics } from '../../interfaces/interface.component';
import addCoin from '../../utils/addCoin';

const HeaderStatistics = (props: IStatistics): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { level, isAddedCoinToday, coins, setCoins, setLevel, setAchievements, setIsAddedCoinToday } = contextApp;
    const { className } = props;

    return (
        <div className={className.statistics}>
            <div className={className.level__box}>
                <span className={className.level__text}>{level}</span> level
            </div>
            <div className={className.coins}>
                <div className={className.coins__add_box}>
                    <Button
                        className={`${className.coins__btn} ${!isAddedCoinToday ? className.coins__btn_pulse : ''}`}
                        delayEvent={false}
                        handleButton={() =>
                            addCoin({
                                setCoins,
                                setLevel,
                                setAchievements,
                                setIsAddedCoinToday,
                            })
                        }
                        textContent="+"
                        type="button"
                    />
                    {!isAddedCoinToday ? <div className={className.pulse}></div> : null}
                </div>
                <div className={className.coins__text_box}>
                    <span className={className.coins__text}>{coins}</span> coins awarded
                </div>
            </div>
        </div>
    );
};

export default HeaderStatistics;
