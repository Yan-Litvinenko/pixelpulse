import React from 'react';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import requestForServer from '../../utils/requestForServer';
import fetchAchievements from '../../utils/fetchAchievements';
import { IAppContext } from '../../interfaces/interface';
import { IAchieve } from '../../interfaces/interface.achievements';

interface IStatistics {
    className: Record<string, string>;
}

const HeaderStatistics = ({ className }: IStatistics): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const handleAddCoin = async (): Promise<void> => {
        try {
            const fetchAddToday: boolean = await requestForServer<boolean>('/status_add_today');
            const fetchAddCoinStatus: boolean = await requestForServer<boolean>('/add_coin');

            if (fetchAddCoinStatus && !fetchAddToday) {
                const updateStatistics = async () => {
                    try {
                        const fetchedLevel: string = await requestForServer<string>('/level');
                        const fetchedCoins: string = await requestForServer<string>('/coins');
                        const fetchedAddToday: boolean = await requestForServer<boolean>('/status_add_today');

                        contextApp.setLevel(fetchedLevel);
                        contextApp.setCoins(fetchedCoins);
                        contextApp.setIsAddedCoinToday(fetchedAddToday);
                    } catch (error) {
                        console.error('Failed to fetch data:', error);
                    }
                };

                await updateStatistics();

                const achievements: IAchieve[] = await fetchAchievements();
                contextApp.setAchievements(achievements);
            } else {
                console.log('Coin addition was not successful.');
            }
        } catch (error) {
            console.error('Failed to add coin:', error);
        }
    };

    return (
        <div className={className.statistics}>
            <div className={className.level__box}>
                <span className={className.level__text}>{contextApp.level}</span> level
            </div>
            <div className={className.coins}>
                <div className={className.coins__add_box}>
                    <Button
                        className={`${className.coins__btn} ${!contextApp.isAddedCoinToday ? className.coins__btn_pulse : ''}`}
                        delayEvent={false}
                        handleButton={handleAddCoin}
                        textContent="+"
                        type="button"
                    />
                    {!contextApp.isAddedCoinToday ? <div className={className.pulse}></div> : null}
                </div>
                <div className={className.coins__text_box}>
                    <span className={className.coins__text}>{contextApp.coins}</span> coins awarded
                </div>
            </div>
        </div>
    );
};

export default HeaderStatistics;
