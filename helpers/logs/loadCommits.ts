import transformCommits from './transformCommits';
import { GET_GITHUB_COMMITS } from '@/app/api/graphql/query';
import type { GithubResponse, GithubTransformCommits } from '@/interface/logs/Github.interface';

const ACCESS_TOKEN: string | undefined = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export default async function loadCommits(): Promise<GithubTransformCommits[]> {
    if (!ACCESS_TOKEN) {
        throw new Error(`Github token or url is not defined. URL: ${URL}, TOKEN: ${ACCESS_TOKEN}`);
    }

    const responseForGithub = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
            Expires: '0',
            Authorization: `token ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: GET_GITHUB_COMMITS }),
    });

    const result = (await responseForGithub.json()) as GithubResponse;

    return transformCommits(result.data.repository.ref.target.history.edges);
}
