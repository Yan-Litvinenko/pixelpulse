import { IGithubRespone } from '../interfaces/interfaces';

const githubApi = async (URL: string, ACCESS_TOKEN: string): Promise<IGithubRespone[] | undefined> => {
    try {
        const response: Response = await fetch(URL, {
            headers: {
                Authorization: `token ${ACCESS_TOKEN}`,
            },
        });
        const data: IGithubRespone[] = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

export default githubApi;
