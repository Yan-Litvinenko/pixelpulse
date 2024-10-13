import dataBase from '@/db/dataBase';
import transformCommitDate from '@/helpers/logs/transformCommitDate';
import type { Statistic } from '@/interface/header/header.interface';
import type { GithubRespone } from '@/interface/logs/Github.interface';

const ACCESS_GITHUB_TOKEN: string | undefined = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const GITHUB_URL: string | undefined = process.env.NEXT_PUBLIC_GITHUB_URL;

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
        getGithubCommits: async () => {
            if (!ACCESS_GITHUB_TOKEN || !GITHUB_URL) {
                throw new Error(
                    `Github token or url is not defined. URL: ${GITHUB_URL}, TOKEN: ${ACCESS_GITHUB_TOKEN}`,
                );
            }

            const response: Response = await fetch(GITHUB_URL, {
                headers: {
                    Authorization: `token ${ACCESS_GITHUB_TOKEN}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch commits from GitHub');
            }

            const commits: GithubRespone[] = await response.json();
            return commits.map((commit) => ({
                message: commit.commit.message,
                committedDate: transformCommitDate(commit.commit.committer.date),
            }));
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
