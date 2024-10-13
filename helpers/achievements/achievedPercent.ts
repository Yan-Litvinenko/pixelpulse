import achievedCount from './achievedCount';
import type { Achieve } from '@/interface/achievements/achievements.interface';

export default function achievedPercent(achievements: Achieve[]): number {
    const amountAchieved: number = achievedCount(achievements);
    const amountAchievements: number = achievements.length;

    return (amountAchieved * 100) / amountAchievements;
}
