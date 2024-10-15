import dataBase from '@/db/dataBase';
import type { Statistic } from '@/interface/header/header.interface';

export const resolvers = {
    Query: {
        getAllAchievements: () => dataBase.getAllAchievements(),
        getStatistic: () => {
            return {
                level: dataBase.getStatistic('level'),
                coins: dataBase.getStatistic('coins'),
            };
        },
        getServerTime: () => {
            const serverTime = new Date();
            return { serverTime: serverTime.toISOString() };
        },
    },
    Mutation: {
        addCoinsAndUpdateLevel: async (): Promise<Statistic> => {
            try {
                let coins: number | null = Number(await dataBase.getStatistic('coins'));

                coins += 5;

                const level: number = dataBase.levelUp(coins);

                await dataBase.updateDataAdminTable('coins', String(coins));
                await dataBase.updateDataAdminTable('level', String(level));

                if ([20, 40, 60, 80].includes(level)) {
                    await dataBase.achievedLevelAchieve(String(level));
                }

                return {
                    level,
                    coins,
                };
            } catch (error) {
                throw new Error('Failed to add coins');
            }
        },
    },
};
