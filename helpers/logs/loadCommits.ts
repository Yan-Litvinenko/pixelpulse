import type { GithubRespone } from '@/interface/logs/Github.interface';

const ACCESS_TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;
const URL: string | undefined = process.env.REACT_APP_GITHUB_URL;

export default async function loadCommits(): Promise<GithubRespone[]> {
    if (!ACCESS_TOKEN || !URL) {
        throw new Error(`Github token or url is not defined. URL: ${URL}, TOKEN: ${ACCESS_TOKEN}`);
    }

    const responseForGithub: Response = await fetch(URL, {
        headers: {
            Authorization: `token ${ACCESS_TOKEN}`,
        },
        next: {
            revalidate: 300,
        },
    });

    return responseForGithub.json();
}
