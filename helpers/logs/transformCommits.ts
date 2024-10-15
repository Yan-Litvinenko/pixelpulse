import transformCommitDate from './transformCommitDate';
import type { GithubCommit, GithubTransformCommits } from '@/interface/logs/Github.interface';

export default function transformCommits(data: GithubCommit[]): GithubTransformCommits[] {
    return data.map((commit) => {
        return {
            message: commit.node.message,
            committedDate: transformCommitDate(commit.node.committedDate),
        };
    });
}
