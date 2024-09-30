import type { Achieve } from '@/interface/achievements/achievements.interface';

export default function achievedCount(allAchievements: Achieve[]): number {
    return allAchievements.reduce((acc, { status }) => acc + (status === 'achieved' ? 1 : 0), 0);
}
