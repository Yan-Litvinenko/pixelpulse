import type { CommitTransform } from '@/interface/logs/Github.interface';

export default function getReplacementCommits(status: 'loading' | 'error loading'): CommitTransform[] {
    return Array.from({ length: 5 }).map(() => {
        return {
            message: status,
            date: status,
        };
    });
}
