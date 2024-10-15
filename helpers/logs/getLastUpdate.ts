import type { GithubTransformCommits } from '@/interface/logs/Github.interface';

export default function getLastUpdate(githubCommits: GithubTransformCommits[]): string {
    return githubCommits[0].committedDate;
}
