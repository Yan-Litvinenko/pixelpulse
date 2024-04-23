import getZero from './getZero';
import { ICommit } from '../interfaces/interface.github';
import { ICommitLog } from '../interfaces/interface';

const handleCommit = (commit: ICommit): ICommitLog | undefined => {
    if (commit) {
        const date: Date = new Date(commit.committer.date);
        const year: number = date.getFullYear();
        const month: string = getZero(date.getMonth() + 1);
        const day: string = getZero(date.getDate());

        return {
            date: `${year}.${month}.${day}`,
            message: commit.message,
        };
    }
};

export default handleCommit;
