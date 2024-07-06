import React from 'react';
import AchievementsAchieve from '../achievementsAchieve/AchievementsAchieve';
import sortAndFilterAchievements from '../../utils/sortAndFilterAchievements';
import { ContextApp } from '../app/App';
import { nanoid } from 'nanoid';
import { IAppContext } from '../../interfaces/interface';
import { Rarity, IAchieve } from '../../interfaces/interface.achievements';
import { IAchievementsBlock, ExecutionStatus } from '../../interfaces/interface.achievements';
import styles from './AchievementsBlock.module.scss';

const AchievementsBlock = (props: IAchievementsBlock): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { forWhatAchievements, prefixForClassName, toggleStatus } = props;

    const achievementsInTheBlock: IAchieve[] = sortAndFilterAchievements(
        contextApp.achievements,
        toggleStatus,
        forWhatAchievements,
    );

    return achievementsInTheBlock.length !== 0 ? (
        <div className={styles[prefixForClassName]}>
            <span className={styles[`${prefixForClassName}__title`]}>
                {prefixForClassName === 'achieved' ? 'achieved:' : 'to be achieved:'}
            </span>
            <div className={styles[`${prefixForClassName}__achievements`]}>
                {achievementsInTheBlock.map((achieve) => (
                    <AchievementsAchieve
                        date={achieve.date}
                        description={achieve.description}
                        key={nanoid()}
                        rarity={achieve.rarity as Rarity}
                        executionStatus={achieve.status as ExecutionStatus}
                        title={achieve.title}
                    />
                ))}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default AchievementsBlock;
