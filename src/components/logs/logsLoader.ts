import { defer } from 'react-router-dom';
import { getZero } from '../../utils/getZero';
import { ICommitTransform, IGithubRespone } from '../../interfaces/interface.github';

const ACCESS_TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;
const URL: string | undefined = process.env.REACT_APP_GITHUB_URL;

const transformCommitDate = (dateInCommit: string): string => {
    const date: Date = new Date(dateInCommit);
    const year: number = date.getFullYear();
    const month: string = getZero(date.getMonth() + 1);
    const day: string = getZero(date.getDate());

    return `${year}.${month}.${day}`;
};

const transformCommits = (data: IGithubRespone[]): ICommitTransform[] => {
    return data
        .map((commit) => {
            return {
                message: commit.commit.message,
                date: transformCommitDate(commit.commit.committer.date),
            };
        })
        .slice(0, 5);
};

const getLastUpdate = (githubCommits: IGithubRespone[]): string => {
    return transformCommitDate(githubCommits[0].commit.committer.date);
};

const getReplacementCommits = (status: 'loading' | 'error loading'): ICommitTransform[] => {
    return Array.from({ length: 5 }).map(() => {
        return {
            message: status,
            date: status,
        };
    });
};

const getCommits = async (): Promise<IGithubRespone[]> => {
    if (!ACCESS_TOKEN || !URL) {
        throw new Error(`Github token or url is not defined. URL: ${URL}, TOKEN: ${ACCESS_TOKEN}`);
    }

    const queryForGithub: Response = await fetch(URL, {
        headers: {
            Authorization: `token ${ACCESS_TOKEN}`,
        },
    });

    return queryForGithub.json();
};

const logsLoader = () => {
    return defer({
        githubCommits: getCommits(),
    });
};

export { logsLoader, transformCommits, getLastUpdate, getReplacementCommits };
