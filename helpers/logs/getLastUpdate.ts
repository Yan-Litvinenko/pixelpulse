import transformCommitDate from './transformCommitDate';
import type { GithubRespone } from '@/interface/logs/Github.interface';

export default function getLastUpdate(githubCommits: GithubRespone[]): string {
    return transformCommitDate(githubCommits[0].commit.committer.date);
}
