import transformCommitDate from './transformCommitDate';
import type { CommitTransform, GithubRespone } from '@/interface/logs/Github.interface';

export default function transformCommits(data: GithubRespone[]): CommitTransform[] {
    return data
        .map((commit) => {
            return {
                message: commit.commit.message,
                date: transformCommitDate(commit.commit.committer.date),
            };
        })
        .slice(0, 5);
}
