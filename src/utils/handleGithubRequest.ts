import getZero from './getZero';
import { IGithubRespone } from '../interfaces/interface.github';
import { ICommitLog } from '../interfaces/interface';

const ACCESS_TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;
const URL: string | undefined = process.env.REACT_APP_GITHUB_URL;

const githubAPI = async (): Promise<IGithubRespone[] | undefined> => {
    try {
        if (URL) {
            const response: Response = await fetch(URL, {
                headers: {
                    Authorization: `token ${ACCESS_TOKEN}`,
                },
            });
            const data: IGithubRespone[] = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

const handleDate = (date: string): string => {
    const newDate: Date = new Date(date);
    const year: number = newDate.getFullYear();
    const month: string = getZero(newDate.getMonth() + 1);
    const day: string = getZero(newDate.getDate());

    return `${year}.${month}.${day}`;
};

const handleCommit = (commits: IGithubRespone[] | undefined): ICommitLog[] | undefined => {
    if (!commits) {
        return;
    }

    return commits.map((commit) => {
        return {
            message: commit.commit.message,
            date: handleDate(commit.commit.committer.date),
        };
    });
};

const handleGithubRequest = async (): Promise<ICommitLog[] | undefined> => {
    if (!ACCESS_TOKEN || !URL) {
        console.error('Access token or URL is undefined');
        return;
    }

    try {
        const data: IGithubRespone[] | undefined = await githubAPI();
        if (!data) return;

        return handleCommit(data.slice(0, 7));
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
};

export { handleGithubRequest, handleDate };
