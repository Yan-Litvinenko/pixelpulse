import getZero from './getZero';
import { IGithubRespone } from '../interfaces/interface.github';
import { ICommitLog } from '../interfaces/interface.github';

const ACCESS_TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;
const URL: string | undefined = process.env.REACT_APP_GITHUB_URL;

const githubAPI = async (token: string, url: string): Promise<IGithubRespone[]> => {
    try {
        const response: Response = await fetch(url, {
            headers: {
                Authorization: `token ${token}`,
            },
        });
        const data: IGithubRespone[] = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
};

const handleDate = (date: string): string => {
    const newDate: Date = new Date(date);
    const year: number = newDate.getFullYear();
    const month: string = getZero(newDate.getMonth() + 1);
    const day: string = getZero(newDate.getDate());

    return `${year}.${month}.${day}`;
};

const handleCommit = (commits: IGithubRespone[]): ICommitLog[] => {
    return commits.map((commit) => {
        return {
            message: commit.commit.message,
            date: handleDate(commit.commit.committer.date),
        };
    });
};

const handleGithubRequest = async (): Promise<ICommitLog[]> => {
    if (!ACCESS_TOKEN || !URL) {
        console.error('Access token or URL is undefined');
        return [];
    }

    try {
        const data: IGithubRespone[] = await githubAPI(ACCESS_TOKEN, URL);
        return handleCommit(data.slice(0, 5));
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export { handleGithubRequest, handleDate };
