import getZero from '../getZero';

export default function transformCommitDate(dateInCommit: Date): string {
    const date: Date = new Date(dateInCommit);
    const year: number = date.getFullYear();
    const month: string = getZero(date.getMonth() + 1);
    const day: string = getZero(date.getDate());

    return `${year}.${month}.${day}`;
}
